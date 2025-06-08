import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Для отображения ошибок
  const navigate = useNavigate();

  // === НАША НОВАЯ ЛОГИКА ===
  const handleRegister = async (e) => {
    e.preventDefault(); // Предотвращаем перезагрузку страницы
    setError(null); // Сбрасываем старую ошибку

    // Простая проверка пароля
    if (password.length < 6) {
      setError("Пароль должен быть не менее 6 символов.");
      return;
    }

    try {
      // 1. Отправляем запрос на наш сервер
      const response = await fetch('http://localhost:5001/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      // 2. Получаем ответ от сервера
      const data = await response.json();

      // 3. Проверяем, все ли прошло хорошо
      if (!response.ok) {
        // Если сервер вернул ошибку (например, "пользователь уже существует"), показываем ее
        throw new Error(data.message || 'Что-то пошло не так при регистрации');
      }

      // 4. Если все успешно
      alert('Регистрация прошла успешно! Теперь вы можете войти.');
      navigate("/login"); // Перенаправляем на страницу входа

    } catch (err) {
      // Ловим любые ошибки (ошибка сети или ошибка от сервера)
      console.error("Ошибка регистрации:", err);
      setError(err.message); // Показываем ошибку пользователю
    }
  };

  return (
    <div className='font-Benzin'>
      <Header/>
      <div className="p-4 max-w-md mx-auto mt-10">
        <h1 className="text-3xl mb-4 text-center">Регистрация</h1>
        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
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
            placeholder="Пароль (минимум 6 символов)" 
            className="p-2 border rounded" 
            required 
          />
          
          {/* Блок для отображения ошибки */}
          {error && <p className="text-red-500 text-center">{error}</p>}

          <button type="submit" className="bg-darkbluegray text-white p-2 text-2xl rounded hover:bg-opacity-90 transition-opacity">
            Зарегистрироваться
          </button>
          <h2 className="text-2xl mb-4 border-t-2 border-darkbluegray pt-4 text-center">Уже есть аккаунт?</h2>
          <button onClick={() => navigate('/login')} type="button" className="bg-wisteria text-white p-2 rounded hover:bg-darkbluegray transition-colors">
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;