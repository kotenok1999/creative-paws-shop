const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Загружаем переменные из .env файла

// Подключаем наши маршруты
const authRoutes = require('./routes/auth');
const profileRoutes = require('./routes/profile');
const orderRoutes = require('./routes/orders');
const adminRoutes = require('./routes/admin'); 

const app = express(); // Создаем приложение Express

// Настройки (промежуточное ПО)
app.use(cors()); // Позволяет запросы с твоего React-сайта
app.use(express.json()); // Позволяет серверу понимать JSON

// Используем маршруты
// Все запросы, начинающиеся с /api/auth, будут идти в файл auth.js
app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/admin', adminRoutes);

// Подключение к базе данных MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Успешное подключение к MongoDB'))
  .catch(err => console.error('❌ Ошибка подключения к MongoDB:', err));


// Запуск сервера
// Используем порт 5001, чтобы не конфликтовать со старым сервером
const PORT = process.env.PORT || 5001; 
app.listen(PORT, () => {
  console.log(`🚀 Сервер (MongoDB) запущен на порту ${PORT}`);
});