const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth'); 
const admin = require('../middleware/admin'); 
const Order = require('../models/Order');
const Feedback = require('../models/Feedback'); 

// === МАРШРУТЫ ДЛЯ УПРАВЛЕНИЯ ЗАКАЗАМИ ===

// GET /api/admin/orders - Получить ВСЕ заказы всех пользователей
// Сначала сработает `auth`, потом `admin`, и только потом основная логика
router.get('/orders', [auth, admin], async (req, res) => {
    try {
        
        const orders = await Order.find().populate('user', 'email').sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// PUT /api/admin/orders/:id - Обновить статус конкретного заказа
router.put('/orders/:id', [auth, admin], async (req, res) => {
    try {
        const { status } = req.body; // Получаем новый статус из тела запроса
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: 'Заказ не найден' });
        }

        // Проверяем, есть ли такой статус в нашей разрешенной модели
        if (!Order.schema.path('status').enumValues.includes(status)) {
             return res.status(400).json({ message: 'Недопустимый статус' });
        }

        order.status = status;
        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});



// === МАРШРУТЫ ДЛЯ ПРОСМОТРА ОБРАЩЕНИЙ ===


// GET /api/admin/feedback - Получить ВСЕ обращения от пользователей
router.get('/feedback', [auth, admin], async (req, res) => {
    try {
        const feedbacks = await Feedback.find().sort({ createdAt: -1 });
        res.json(feedbacks);
    } catch (err)
        {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});


module.exports = router;