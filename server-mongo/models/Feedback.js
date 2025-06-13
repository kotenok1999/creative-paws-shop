const mongoose = require('mongoose');

const FeedbackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Пожалуйста, укажите ваше имя']
    },
    email: {
        type: String,
        required: [true, 'Пожалуйста, укажите ваш email']
    },
    subject: {
        type: String,
        required: [true, 'Пожалуйста, укажите тему обращения']
    },
    message: {
        type: String,
        required: [true, 'Пожалуйста, напишите ваше сообщение']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Feedback', FeedbackSchema);