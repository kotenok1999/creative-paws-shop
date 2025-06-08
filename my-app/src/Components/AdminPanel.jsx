import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const AdminPanel = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const statuses = ['На рассмотрении', 'Оплачен', 'В пути', 'Завершен', 'Отменен'];

    const fetchOrders = useCallback(async () => {
        const token = localStorage.getItem('token');
        try {
            const response = await fetch('https://creative-paws-shop-production.up.railway.app/api/admin/orders', {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!response.ok) throw new Error('Доступ запрещен');
            const data = await response.json();
            setOrders(data);
        } catch (error) {
            navigate('/');
        } finally {
            setLoading(false);
        }
    }, [navigate]);
    
    useEffect(() => { 
        fetchOrders(); 
    }, [fetchOrders]);

    const handleStatusChange = async (orderId, newStatus) => {
        const token = localStorage.getItem('token');
        try {
            await fetch(`https://creative-paws-shop-production.up.railway.app/api/admin/orders/${orderId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ status: newStatus })
            });
            fetchOrders();
        } catch (error) {
            alert('Не удалось изменить статус');
        }
    };

    if (loading) return (
        <div className="font-Benzin bg-wisterialight min-h-screen flex justify-center items-center">
            <p className="text-2xl">Загрузка панели администратора...</p>
        </div>
    );

    return (
        <div className="font-Benzin bg-wisterialight min-h-screen">
            <Header />
            <main className="container mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold mb-8">Админ-панель: Все заказы</h1>
                {orders.length > 0 ? (
                    <div className="space-y-6">
                        {orders.map(order => (
                            <div key={order._id} className="bg-white p-6 rounded-lg shadow-md">
                                {/* Верхняя часть с основной информацией */}
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Заказ №</p>
                                        <p className="font-semibold">{order._id}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Пользователь</p>
                                        <p className="font-semibold">{order.user?.email || 'Неизвестно'}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Дата</p>
                                        <p className="font-semibold">{new Date(order.createdAt).toLocaleString()}</p>
                                    </div>
                                </div>
                                
                                {/* Средняя часть со статусом и суммой */}
                                <div className="flex items-center justify-between border-t border-b py-4 my-4">
                                    <div className="flex items-center space-x-4">
                                        <label htmlFor={`status-${order._id}`} className="font-semibold">Статус:</label>
                                        <select 
                                            id={`status-${order._id}`}
                                            value={order.status}
                                            onChange={(e) => handleStatusChange(order._id, e.target.value)}
                                            className="p-2 border rounded-md bg-gray-50 focus:ring-wisteria focus:border-wisteria"
                                        >
                                            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    <div className="font-bold text-xl">{order.total} РУБ.</div>
                                </div>

                                {/* === НАШ НОВЫЙ БЛОК С ТОВАРАМИ === */}
                                <div>
                                    <h4 className="font-semibold mb-2">Состав заказа:</h4>
                                    <div className="space-y-2">
                                        {order.products.map((product, index) => (
                                            <div key={index} className="flex items-center bg-gray-50 p-2 rounded-md">
                                                <img src={product.image} alt={product.name} className="w-12 h-12 object-cover rounded-md mr-4"/>
                                                <div className="flex-grow">
                                                    <p className="font-semibold">{product.name}</p>
                                                    <p className="text-sm text-gray-600">{product.price} Р x {product.quantity} шт.</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                     <p>Новых заказов пока нет.</p>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default AdminPanel;