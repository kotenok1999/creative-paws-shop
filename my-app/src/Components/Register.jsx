import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import toast from 'react-hot-toast'; 

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password.length < 6) {
        toast.error("Пароль должен быть не менее 6 символов."); 
        return;
    }

    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так');
      }
      
      toast.success('Регистрация прошла успешно! Теперь вы можете войти.'); 
      navigate("/login");

    } catch (error) {
      toast.error(error.message); 
    }
  };

  return (
    <div className='font-Benzin'>
      <Header/>
      <div className="p-4 max-w-md mx-auto mt-10">
        <h1 className="text-3xl mb-4 text-center">Регистрация</h1>
        <form onSubmit={handleRegister} className="flex flex-col space-y-4">
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" className="p-2 border rounded" required />
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Пароль (минимум 6 символов)" className="p-2 border rounded" required />
          <button type="submit" className="bg-darkbluegray text-white p-2 text-2xl rounded hover:bg-opacity-90 transition-opacity">Зарегистрироваться</button>
          <h2 className="text-2xl mb-4 border-t-2 border-darkbluegray pt-4 text-center">Уже есть аккаунт?</h2>
          <button onClick={() => navigate('/login')} type="button" className="bg-wisteria text-white p-2 rounded hover:bg-darkbluegray transition-colors">Войти</button>
        </form>
      </div>
    </div>
  );
};

export default Register;