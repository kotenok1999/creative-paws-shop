const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 
const User = require('../models/User');


// Этот маршрут защищен. Сначала сработает `auth`, и только потом код внутри.
router.get('/', auth, async (req, res) => {
  try {
    // Мы получаем userId из токена, который наш "охранник" добавил в req
    const user = await User.findById(req.user.userId).select('-password');
    if (!user) {
        return res.status(404).json({ message: 'Пользователь не найден' });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;