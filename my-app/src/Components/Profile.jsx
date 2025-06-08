
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const Profile = () => {
    const [user, setUser] = useState(null);
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Этот useEffect сработает один раз при загрузке страницы
    useEffect(() => {
        const fetchProfileData = async () => {
            // 1. Берем "пропуск" (токен) из "кармана" (localStorage)
            const token = localStorage.getItem('token');
            if (!token) {
                // Если пропуска нет, не пускаем и отправляем на страницу входа
                navigate('/login');
                return;
            }

            try {
                // 2. Отправляем два запроса одновременно, чтобы было быстрее
                const [profileResponse, ordersResponse] = await Promise.all([
                    // Запрос на данные профиля
                    fetch('https://creative-paws-shop-production.up.railway.app/api/profile', {
                        headers: { 'Authorization': `Bearer ${token}` }
                    }),
                    // Запрос на историю заказов
                    fetch('https://creative-paws-shop-production.up.railway.app/api/orders', {
                        headers: { 'Authorization': `Bearer ${token}` }
                    })
                ]);

                // 3. Проверяем, что серверу понравился наш "пропуск"
                if (!profileResponse.ok || !ordersResponse.ok) {
                    throw new Error('Ошибка авторизации. Пожалуйста, войдите снова.');
                }
                
                // 4. Получаем и сохраняем данные
                const profileData = await profileResponse.json();
                const ordersData = await ordersResponse.json();

                setUser(profileData);
                setOrders(ordersData);

            } catch (error) {
                console.error(error.message);
                // Если токен плохой (например, истек), стираем его и отправляем на вход
                localStorage.removeItem('token');
                navigate('/login');
            } finally {
                // В любом случае убираем сообщение о загрузке
                setLoading(false);
            }
        };

        fetchProfileData();
    }, [navigate]); // Зависимость от navigate (стандартная практика)

    // Функция для выхода из аккаунта
    const handleLogout = () => {
        localStorage.removeItem('token'); // Выбрасываем "пропуск"
        navigate('/'); // Идем на главную
        window.location.reload(); // Перезагружаем страницу, чтобы Header точно обновился
    };

    // Пока данные грузятся, показываем это сообщение
    if (loading) {
        return (
            <div className="font-Benzin bg-wisterialight min-h-screen flex justify-center items-center">
                <p className="text-2xl">Загрузка профиля...</p>
            </div>
        );
    }

    // Когда данные загружены, показываем страницу
    return (
        <div className="font-Benzin bg-wisterialight min-h-screen">
            <Header />
            <main className="container mx-auto max-w-4xl py-12 px-4">
                <div className="bg-white rounded-lg shadow-xl p-8">
                    <div className="flex justify-between items-center mb-8 border-b pb-4">
                        <h1 className="text-4xl font-bold">Ваш профиль</h1>
                        <button onClick={handleLogout} className="text-gray-500 hover:text-red-600 transition-colors">
                            Выйти
                        </button>
                    </div>

                    {user && (
                        <div className="mb-10">
                            <h2 className="text-2xl font-semibold mb-2">Личные данные</h2>
                            <p className="text-lg"><strong>Email:</strong> {user.email}</p>
                            <p className="text-lg"><strong>Дата регистрации:</strong> {new Date(user.createdAt).toLocaleDateString()}</p>
                        </div>
                    )}

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">История заказов</h2>
                        {orders.length > 0 ? (
                            <div className="space-y-6">
                                {orders.map(order => (
                                    <div key={order._id} className="border p-4 rounded-lg shadow-sm bg-gray-50">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <p className="font-bold">Заказ №: <span className="font-normal text-gray-600">{order._id}</span></p>
                                                <p className="font-bold">Дата: <span className="font-normal text-gray-600">{new Date(order.createdAt).toLocaleDateString()}</span></p>
                                            </div>
                                            <span className="font-bold text-lg">{order.total} РУБ.</span>
                                        </div>
                                        <p className="font-bold mb-2">Статус: <span className="text-wisteria font-semibold">{order.status}</span></p>
                                        
                                        <div className="border-t pt-2 mt-2">
                                            <h4 className="text-sm font-bold mb-1">Состав заказа:</h4>
                                            {order.products.map((product, index) => (
                                                <div key={index} className="flex items-center space-x-2 text-sm text-gray-700 p-1">
                                                    <img src={product.image} alt={product.name} className="w-10 h-10 object-cover rounded"/>
                                                    <span>{product.name} - {product.quantity} шт.</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p>У вас еще нет заказов.</p>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Profile;