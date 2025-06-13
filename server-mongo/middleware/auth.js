const jwt = require('jsonwebtoken');


// Middleware — это функция, которая выполняется перед основной логикой маршрута
module.exports = function (req, res, next) {
  // 1. Получаем токен из заголовка запроса
  const token = req.header('Authorization')?.replace('Bearer ', '');

  // 2. Проверяем, есть ли токен
  if (!token) {
    return res.status(401).json({ message: 'Нет токена, доступ запрещен' });
  }

  // 3. Проверяем, настоящий ли это токен
  try {
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Если токен верный, мы добавляем информацию о пользователе в сам запрос
    req.user = decoded; // В `decoded` у нас { userId, isAdmin }
    next(); // Разрешаем идти дальше, к основной логике
  } catch (err) {
    res.status(401).json({ message: 'Токен недействителен' });
  }
};