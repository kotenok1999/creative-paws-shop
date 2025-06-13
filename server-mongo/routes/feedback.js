const express = require('express');
const router = express.Router();
const Feedback = require('../models/Feedback');


router.post('/', async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        const newFeedback = new Feedback({
            name,
            email,
            subject,
            message
        });

        await newFeedback.save();
        res.status(201).json({ message: 'Спасибо за ваше обращение! Мы скоро с вами свяжемся.' });
    } catch (error) {
        // Обработка ошибок валидации от Mongoose
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(val => val.message);
            return res.status(400).json({ message: messages.join(', ') });
        }
        res.status(500).send('Ошибка на сервере');
    }
});

module.exports = router;