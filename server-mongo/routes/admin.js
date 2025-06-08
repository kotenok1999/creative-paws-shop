const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const admin = require('../middleware/admin');
const Order = require('../models/Order');

// GET /api/admin/orders - Получить ВСЕ заказы
router.get('/orders', [auth, admin], async (req, res) => {
    try {
        // === ИЗМЕНЕНИЕ ЗДЕСЬ ===
        // Мы добавляем .populate('user', 'email')
        // Это говорит базе: "Найди все заказы, а для каждого заказа найди связанного с ним пользователя
        // и из этого пользователя возьми только поле email".
        const orders = await Order.find().populate('user', 'email').sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

// PUT /api/admin/orders/:id - Обновить статус заказа (без изменений)
router.put('/orders/:id', [auth, admin], async (req, res) => {
    try {
        const { status } = req.body;
        const order = await Order.findById(req.params.id);

        if (!order) {
            return res.status(404).json({ message: 'Заказ не найден' });
        }

        order.status = status;
        await order.save();
        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

module.exports = router;