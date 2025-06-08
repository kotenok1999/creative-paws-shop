// Файл: my-app/src/Components/Header/Header.jsx - ИСПРАВЛЕННАЯ ВЕРСИЯ

import React, { useState, useEffect, useRef } from 'react'; // <-- ИЗМЕНЕНИЕ ЗДЕСЬ: ДОБАВИЛИ useRef
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { jwtDecode } from 'jwt-decode';

import logo from './img/logo.png';
import person from './img/person.png';
import basket from './img/basket.png';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { cartItems } = useCart();
    const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    
    const [showCatalogMenu, setShowCatalogMenu] = useState(false);
    const [user, setUser] = useState(null);

    const hideTimer = useRef(null);

    const handleMouseEnter = () => {
        clearTimeout(hideTimer.current);
        setShowCatalogMenu(true);
    };

    const handleMouseLeave = () => {
        hideTimer.current = setTimeout(() => {
            setShowCatalogMenu(false);
        }, 300);
    };

    useEffect(() => {
        try {
            const token = localStorage.getItem('token');
            if (token) {
                const decodedToken = jwtDecode(token);
                setUser(decodedToken);
            } else {
                setUser(null);
            }
        } catch (error) {
            console.error("Ошибка декодирования токена:", error);
            setUser(null);
        }
    }, [location.pathname]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        setUser(null);
        navigate('/');
    };

    return (
        <header className="container mx-auto bg-jacarta border border-gray-300 flex justify-between items-center px-10 py-2 mt-2 rounded-xl">
            <div className="flex items-center justify-between space-x-3 cursor-pointer" onClick={() => navigate('/')}>
                <img src={logo} alt="logo" className="w-[80px] h-[80px]" />
                <p className="text-3xl text-white font-Benzin">
                    CREATIVE
                    <br />
                    PAWS
                </p>
            </div>

            <nav className="flex items-center justify-between space-x-3">
                <div className="relative">
                    <button 
                        onClick={() => navigate('/catalog')} 
                        onMouseEnter={handleMouseEnter} 
                        onMouseLeave={handleMouseLeave}
                        className="text-1xl text-white font-Benzin bg-jacarta border-2 border-darkbluegray rounded-full hover:bg-darkbluegray py-2 px-4 transition-colors"
                    >
                        КАТАЛОГ
                    </button>
                    {showCatalogMenu && (
                        <div 
                            onMouseEnter={handleMouseEnter} 
                            onMouseLeave={handleMouseLeave}
                            className="absolute left-0 mt-2 w-48 bg-jacarta border border-darkbluegray rounded-md shadow-lg z-10 flex flex-col"
                        >
                            <button onClick={() => navigate('/catalogstikers')} className="text-left w-full block px-4 py-2 text-sm text-white hover:bg-darkbluegray font-Benzin">СТИКЕРЫ</button>
                            <button onClick={() => navigate('/catalogstikerbook')} className="text-left w-full block px-4 py-2 text-sm text-white hover:bg-darkbluegray font-Benzin">СТИКЕРБУКИ</button>
                            <button onClick={() => navigate('/catalogmoodpack')} className="text-left w-full block px-4 py-2 text-sm text-white hover:bg-darkbluegray font-Benzin">МУДПАКИ</button>
                            <button onClick={() => navigate('/catalogsertif')} className="text-left w-full block px-4 py-2 text-sm text-white hover:bg-darkbluegray font-Benzin">СЕРТИФИКАТЫ</button>
                        </div>
                    )}
                </div>
                <button onClick={() => navigate('/')} className="text-1xl text-white font-Benzin bg-jacarta border-2 border-darkbluegray rounded-full hover:bg-darkbluegray py-2 px-4 transition-colors">ГЛАВНАЯ</button>
                <button onClick={() => navigate('/about')} className="text-1xl text-white font-Benzin bg-jacarta border-2 border-darkbluegray rounded-full hover:bg-darkbluegray py-2 px-4 transition-colors">О НАС</button>
                <button onClick={() => navigate('/delivery')} className="text-1xl text-white font-Benzin bg-jacarta border-2 border-darkbluegray rounded-full hover:bg-darkbluegray py-2 px-4 transition-colors">ДОСТАВКА И ОПЛАТА</button>
            </nav>

            <div className="flex items-center justify-center space-x-3">
                <div className="relative">
                    <button onClick={() => navigate('/cart')} aria-label="Корзина" className="w-[50px] h-[50px] bg-jacarta border-2 border-darkbluegray rounded-full p-2 hover:bg-darkbluegray cursor-pointer transition-colors">
                        <img src={basket} alt="корзина" />
                    </button>
                    {totalCount > 0 && (
                        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center pointer-events-none">
                            {totalCount}
                        </span>
                    )}
                </div>

                {user ? (
                    <>
                        {user.isAdmin && (
                            <Link to="/admin" className="text-white bg-wisteria px-3 py-2 rounded-md text-sm font-medium hover:bg-darkbluegray" title="Панель администратора">
                                Админ
                            </Link>
                        )}
                        <button onClick={() => navigate('/profile')} className="w-[50px] h-[50px] bg-jacarta border-2 border-darkbluegray rounded-full p-2 hover:bg-darkbluegray" title="Профиль">
                            <img src={person} alt="Профиль" />
                        </button>
                        <button onClick={handleLogout} className="text-white text-sm hover:text-wisteria" title="Выйти">
                            Выйти
                        </button>
                    </>
                ) : (
                    <button onClick={() => navigate('/login')} className="w-[50px] h-[50px] bg-jacarta border-2 border-darkbluegray rounded-full p-2 hover:bg-darkbluegray" title="Войти">
                        <img src={person} alt="Войти" />
                    </button>
                )}
            </div>
        </header>
    );
};

export default Header;