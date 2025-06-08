// Файл: my-app/src/Components/Cart.jsx - НОВАЯ ВЕРСИЯ

import React from 'react';
import { useCart } from '../context/CartContext';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Link, useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // === НАША НОВАЯ ФУНКЦИЯ ДЛЯ ПЕРЕХОДА К ОФОРМЛЕНИЮ ===
  const handleProceedToCheckout = () => {
    // Очищаем корзину только после успешного оформления на следующей странице
    // clearCart(); 
    navigate('/checkout', { state: { cartItems, total } });
  };

  return (
    <div className="font-Benzin bg-wisterialight min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto py-10 px-4 flex-grow">
        <div className="flex justify-between items-center border-b-2 border-black pb-4 mb-8">
          <h1 className="text-4xl font-bold">Корзина</h1>
          {cartItems.length > 0 && (
             <button onClick={clearCart} className="text-sm text-gray-500 hover:text-red-600 hover:underline">
                Очистить корзину
              </button>
          )}
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl mb-4">Ваша корзина пуста.</p>
            <Link to="/catalog" className="text-1xl text-white font-Benzin bg-darkbluegray border-2 border-darkbluegray rounded-sm hover:bg-wisteria py-3 px-8 transition-colors">
              Перейти в каталог
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-6">
                {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
                    <div className="flex items-center space-x-4">
                      <img src={item.images[0]} alt={item.name} className="w-24 h-24 object-cover rounded-md" />
                      <div>
                        <h2 className="text-xl font-semibold">{item.name}</h2>
                        <p className="text-gray-600">{item.price} Р x {item.quantity}</p>
                        <p className="text-lg font-bold">{item.price * item.quantity} Р</p>
                      </div>
                    </div>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 font-semibold">
                      Удалить
                    </button>
                </div>
                ))}
            </div>

            <div className="mt-8 pt-6 border-t-2 border-gray-300 flex flex-col items-end">
              <div className="text-right text-3xl font-bold mb-4">Итого: {total} РУБ.</div>
              {/* НАША ОБНОВЛЕННАЯ КНОПКА */}
              <button onClick={handleProceedToCheckout} className="bg-darkbluegray text-white text-xl py-3 px-10 rounded hover:bg-wisteria transition-colors">
                Перейти к оформлению
              </button>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;