import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import toast from 'react-hot-toast'; 

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
      }
      
      localStorage.setItem('token', data.token);
      toast.success('Вы успешно вошли в систему!');
      navigate("/");

    } catch (error) {
      toast.error(error.message || 'Неверный email или пароль'); 
    }
  };

  return (
    <div className='font-Benzin'>
      <Header/>
      <div className="p-4 max-w-md mx-auto mt-10">
        <h1 className="text-3xl mb-4 text-center">Вход</h1>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded" required />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль" className="p-2 border rounded" required />
          <button type="submit" className="bg-darkbluegray text-white p-2 text-2xl rounded hover:bg-opacity-90 transition-opacity">Войти</button>
          <h2 className="text-2xl mb-4 border-t-2 border-darkbluegray pt-4 text-center">У Вас еще нет аккаунта?</h2>
          <button onClick={() => navigate('/register')} type="button" className="bg-wisteria text-white p-2 rounded hover:bg-darkbluegray transition-colors">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  );
};

export default Login;