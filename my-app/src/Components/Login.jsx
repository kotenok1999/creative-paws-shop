import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
// import { useAuth } from '../context/AuthContext'; // Пока не используем, но оставим на будущее

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  // const { login } = useAuth(); // Тоже для будущего AuthContext

  // === НАША НОВАЯ ЛОГИКА ===
  const handleLogin = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      // 1. Отправляем запрос на наш сервер
      const response = await fetch('http://localhost:5001/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // 2. Получаем ответ
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так при входе');
      }

      // 3. ВАЖНО: Сохраняем токен!
      // localStorage - это простое хранилище в браузере.
      localStorage.setItem('token', data.token);

      // Можно также обновить состояние аутентификации в приложении
      // login(data.token); // Это для будущего, когда мы обновим AuthContext

      alert('Вход выполнен успешно!');
      navigate("/"); // Перенаправляем на главную страницу

    } catch (err) {
      console.error("Ошибка входа:", err);
      setError(err.message);
    }
  };

  return (
    <div className='font-Benzin'>
      <Header/>
      <div className="p-4 max-w-md mx-auto mt-10">
        <h1 className="text-3xl mb-4 text-center">Вход</h1>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input 
            type="email" 
            value={email} 
            onChange={e => setEmail(e.target.value)} 
            placeholder="Email" 
            className="p-2 border rounded" 
            required 
          />
          <input 
            type="password" 
            value={password} 
            onChange={e => setPassword(e.target.value)} 
            placeholder="Пароль" 
            className="p-2 border rounded" 
            required 
          />

          {error && <p className="text-red-500 text-center">{error}</p>}

          <button type="submit" className="bg-darkbluegray text-white p-2 text-2xl rounded hover:bg-opacity-90 transition-opacity">
            Войти
          </button>
          <h2 className="text-2xl mb-4 border-t-2 border-darkbluegray pt-4 text-center">У Вас еще нет аккаунта?</h2>
          <button onClick={() => navigate('/register')} type="button" className="bg-wisteria text-white p-2 rounded hover:bg-darkbluegray transition-colors">
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
};
export default Login;