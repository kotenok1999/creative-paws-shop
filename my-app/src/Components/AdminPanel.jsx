import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

const AdminPanel = () => {
    const [orders, setOrders] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState('orders');
    const navigate = useNavigate();
    const statuses = ['На рассмотрении', 'Оплачен', 'В пути', 'Завершен', 'Отменен'];

    const fetchData = useCallback(async () => {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
            return;
        }
        try {
            
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

            const [ordersRes, feedbacksRes] = await Promise.all([
                fetch(`${apiUrl}/api/admin/orders`, { headers: { 'Authorization': `Bearer ${token}` } }),
                fetch(`${apiUrl}/api/admin/feedback`, { headers: { 'Authorization': `Bearer ${token}` } })
            ]);
            if (!ordersRes.ok || !feedbacksRes.ok) throw new Error('Доступ запрещен');
            const ordersData = await ordersRes.json();
            const feedbacksData = await feedbacksRes.json();
            setOrders(ordersData);
            setFeedbacks(feedbacksData);
        } catch (error) {
            navigate('/');
        } finally {
            setLoading(false);
        }
    }, [navigate]);
    
    useEffect(() => { 
        fetchData(); 
    }, [fetchData]);

    const handleStatusChange = async (orderId, newStatus) => {
        const token = localStorage.getItem('token');
        try {
            
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';

            await fetch(`${apiUrl}/api/admin/orders/${orderId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify({ status: newStatus })
            });
            fetchData();
        } catch (error) {
            // Можно добавить уведомление для админа
            console.error('Не удалось изменить статус', error);
        }
    };

    if (loading) {
        return (
            <div className="font-Benzin bg-wisterialight min-h-screen flex justify-center items-center">
                <p className="text-2xl">Загрузка панели администратора...</p>
            </div>
        );
    }

    return (
        <div className="font-Benzin bg-wisterialight min-h-screen">
            <Header />
            <main className="container mx-auto py-10 px-4">
                <h1 className="text-4xl font-bold mb-8">Админ-панель</h1>

                <div className="flex border-b mb-6">
                    <button onClick={() => setActiveTab('orders')} className={`py-2 px-6 text-lg transition-colors ${activeTab === 'orders' ? 'border-b-2 border-wisteria font-bold text-black' : 'text-gray-500 hover:text-black'}`}>
                        Управление заказами <span className="bg-gray-200 text-gray-700 text-sm font-bold rounded-full px-2 py-1">{orders.length}</span>
                    </button>
                    <button onClick={() => setActiveTab('feedbacks')} className={`py-2 px-6 text-lg transition-colors ${activeTab === 'feedbacks' ? 'border-b-2 border-wisteria font-bold text-black' : 'text-gray-500 hover:text-black'}`}>
                        Обращения <span className="bg-gray-200 text-gray-700 text-sm font-bold rounded-full px-2 py-1">{feedbacks.length}</span>
                    </button>
                </div>

                {/* === менюшка заказов === */}
                {activeTab === 'orders' && (
                    <div className="space-y-6">
                        {orders.length > 0 ? orders.map(order => (
                             <div key={order._id} className="bg-white p-6 rounded-lg shadow-md">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                    <div><p className="text-sm text-gray-500">Заказ №</p><p className="font-semibold">{order._id}</p></div>
                                    <div><p className="text-sm text-gray-500">Пользователь</p><p className="font-semibold">{order.user?.email || 'Неизвестно'}</p></div>
                                    <div><p className="text-sm text-gray-500">Дата</p><p className="font-semibold">{new Date(order.createdAt).toLocaleString()}</p></div>
                                </div>
                                <div className="flex items-center justify-between border-t border-b py-4 my-4">
                                    <div className="flex items-center space-x-4">
                                        <label htmlFor={`status-${order._id}`} className="font-semibold">Статус:</label>
                                        <select id={`status-${order._id}`} value={order.status} onChange={(e) => handleStatusChange(order._id, e.target.value)} className="p-2 border rounded-md bg-gray-50 focus:ring-wisteria focus:border-wisteria">
                                            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
                                        </select>
                                    </div>
                                    <div className="font-bold text-xl">{order.total} РУБ.</div>
                                </div>
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
                        )) : <p>Новых заказов пока нет.</p>}
                    </div>
                )}

                {/* === менюшка обращений === */}
                {activeTab === 'feedbacks' && (
                    <div className="space-y-6">
                        {feedbacks.length > 0 ? (
                            feedbacks.map(fb => (
                                <div key={fb._id} className="bg-white p-6 rounded-lg shadow-md">
                                    <div className="flex justify-between items-center mb-4 pb-2 border-b">
                                        <div>
                                            <p className="font-bold text-lg">{fb.name} <span className="font-normal text-gray-500 text-base">{fb.email}</span></p>
                                            <p className="text-sm text-gray-500">Отправлено: {new Date(fb.createdAt).toLocaleString()}</p>
                                        </div>
                                    </div>
                                    <h3 className="font-semibold text-xl mb-2">{fb.subject}</h3>
                                    <p className="bg-gray-50 p-4 rounded-md whitespace-pre-wrap">{fb.message}</p>
                                </div>
                            ))
                        ) : (
                            <p>Новых обращений нет.</p>
                        )}
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
};

export default AdminPanel;