const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const Order = require('../models/Order');

//  Создать новый заказ
router.post('/', auth, async (req, res) => {
    try {
        const { products, total } = req.body;
        
        const newOrder = new Order({
            user: req.user.userId, // Привязываем заказ к ID пользователя из токена
            products,
            total
        });

        const order = await newOrder.save();
        res.status(201).json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});

//  Получить все заказы ТЕКУЩЕГО пользователя
router.get('/', auth, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.userId }).sort({ createdAt: -1 });
        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка сервера');
    }
});


module.exports = router;