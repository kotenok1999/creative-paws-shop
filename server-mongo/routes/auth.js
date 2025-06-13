const express = require('express');
const router = express.Router();
const User = require('../models/User'); 
const bcrypt = require('bcryptjs'); // Для шифрования паролей
const jwt = require('jsonwebtoken'); // Для создания "пропусков" (токенов)

// === Маршрут для РЕГИСТРАЦИИ  ===
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body; // Получаем email и пароль из запроса

    // 1. Проверяем, не занят ли email
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    // 2. Шифруем (хэшируем) пароль
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // 3. Создаем нового пользователя в памяти
    const newUser = new User({
      email,
      password: hashedPassword, // Сохраняем только зашифрованный пароль
    });

    // 4. Сохраняем пользователя в базу данных
    await newUser.save();

    res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
  } catch (error) {
    res.status(500).send('Ошибка на сервере при регистрации');
  }
});

// === Маршрут для ВХОДА ===
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1. Ищем пользователя по email в базе
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Неверный email или пароль' });
    }

    // 2. Сравниваем введенный пароль с тем, что в базе (с хэшем)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Неверный email или пароль' });
    }

    // 3. Если все верно, создаем "пропуск" (JWT токен)
    const payload = {
      userId: user.id,
      isAdmin: user.isAdmin,
    };

    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    // 4. Отправляем токен пользователю
    res.json({ token, message: 'Вход выполнен успешно' });
  } catch (error) {
    res.status(500).send('Ошибка на сервере при входе');
  }
});

module.exports = router;