// Файл: my-app/src/Components/Checkout.jsx - НОВЫЙ ФАЙЛ

import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';

// Данные о доставке, которые мы возьмем из твоего Delivery.jsx
const deliveryOptions = [
    { id: 1, name: 'Простое письмо', price: 149, description: 'Отправка Почтой России, приходит в почтовый ящик' },
    { id: 2, name: 'Заказным письмом с трек-кодом', price: 199, description: 'Отправка Почтой России, получение по паспорту' },
    { id: 3, name: 'Boxberry', price: 179, description: 'Приходит в выбранный ПВЗ' },
    { id: 4, name: 'CDEK', price: 209, description: 'Приходит в выбранный ПВЗ' }
];

const Checkout = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Получаем данные о корзине, которые мы "пронесли" со страницы Cart
    const { cartItems, total: cartTotal } = location.state || { cartItems: [], total: 0 };

    const [selectedDelivery, setSelectedDelivery] = useState(deliveryOptions[0]);
    const [isPaid, setIsPaid] = useState(false);

    if (cartItems.length === 0) {
        // Если кто-то зашел на эту страницу без товаров, отправляем его в корзину
        navigate('/cart');
        return null;
    }
    
    // Считаем итоговую сумму с учетом доставки
    const finalTotal = cartTotal + selectedDelivery.price;

    const handlePlaceOrder = async () => {
        if (!isPaid) {
            alert('Пожалуйста, подтвердите оплату, поставив галочку.');
            return;
        }

        const token = localStorage.getItem('token');
        if (!token) {
            alert('Пожалуйста, войдите в систему, чтобы завершить заказ.');
            navigate('/login');
            return;
        }

        const orderData = {
            products: cartItems.map(item => ({
                name: item.name,
                price: item.price,
                quantity: item.quantity,
                image: item.images[0]
            })),
            total: finalTotal, // Отправляем итоговую сумму с доставкой
            status: 'Оплачен' // Статус сразу "Оплачен", так как есть галочка
        };

        try {
            const response = await fetch('https://creative-paws-shop-production.up.railway.app/api/orders', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
                body: JSON.stringify(orderData)
            });

            if (!response.ok) throw new Error('Не удалось создать заказ');

            alert('Ваш заказ успешно оформлен! Спасибо!');
            // Тут нужно очистить корзину, но мы сделаем это на странице корзины при уходе
            navigate('/profile');

        } catch (error) {
            alert(`Ошибка: ${error.message}`);
        }
    };

    return (
        <div className="font-Benzin bg-wisterialight min-h-screen">
            <Header />
            <main className="container mx-auto max-w-4xl py-12 px-4">
                <h1 className="text-4xl font-bold mb-8 text-center">Оформление заказа</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Левая колонка: Состав заказа */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Состав заказа</h2>
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.id} className="flex items-center justify-between">
                                    <div className="flex items-center space-x-3">
                                        <img src={item.images[0]} alt={item.name} className="w-16 h-16 rounded-md object-cover" />
                                        <div>
                                            <p className="font-semibold">{item.name}</p>
                                            <p className="text-sm text-gray-600">{item.quantity} шт.</p>
                                        </div>
                                    </div>
                                    <p className="font-semibold">{item.price * item.quantity} Р</p>
                                </div>
                            ))}
                        </div>
                        <div className="border-t mt-4 pt-4 flex justify-between font-bold text-lg">
                            <span>Сумма по товарам:</span>
                            <span>{cartTotal} Р</span>
                        </div>
                    </div>

                    {/* Правая колонка: Доставка и оплата */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Доставка</h2>
                        <div className="space-y-3">
                            {deliveryOptions.map(option => (
                                <div key={option.id} onClick={() => setSelectedDelivery(option)} className={`p-3 border rounded-lg cursor-pointer transition-all ${selectedDelivery.id === option.id ? 'border-wisteria bg-purple-50 ring-2 ring-wisteria' : 'border-gray-200'}`}>
                                    <div className="flex justify-between font-semibold">
                                        <span>{option.name}</span>
                                        <span>{option.price} Р</span>
                                    </div>
                                    <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="border-t mt-6 pt-6">
                            <h2 className="text-2xl font-semibold mb-4">Итоговая сумма</h2>
                            <div className="space-y-2 text-lg">
                                <div className="flex justify-between"><span>Товары:</span> <span>{cartTotal} Р</span></div>
                                <div className="flex justify-between"><span>Доставка:</span> <span>{selectedDelivery.price} Р</span></div>
                                <div className="flex justify-between font-bold text-2xl mt-2 border-t pt-2"><span>Всего к оплате:</span> <span>{finalTotal} Р</span></div>
                            </div>
                        </div>

                        {/* Наша волшебная галочка */}
                        <div className="mt-8">
                            <label className="flex items-center cursor-pointer">
                                <input type="checkbox" checked={isPaid} onChange={() => setIsPaid(!isPaid)} className="h-5 w-5 rounded border-gray-300 text-wisteria focus:ring-purple-400" />
                                <span className="ml-3 text-lg font-semibold">Я подтверждаю оплату</span>
                            </label>
                        </div>
                        
                        <button onClick={handlePlaceOrder} className="w-full mt-6 bg-darkbluegray text-white text-xl py-3 rounded-lg hover:bg-wisteria transition-colors disabled:bg-gray-400" disabled={!isPaid}>
                            Завершить оформление
                        </button>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default Checkout;