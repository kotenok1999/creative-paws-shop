const mongoose = require('mongoose');

// Создаем "чертеж" (схему) для пользователя
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true, // Поле обязательное
    unique: true,   // Должно быть уникальным
    lowercase: true,// Всегда в нижнем регистре
  },
  password: {
    type: String,
    required: true, // Поле обязательное
  },
  isAdmin: {
    type: Boolean,
    default: false, // По умолчанию пользователь не админ
  },
  createdAt: {
    type: Date,
    default: Date.now, // Дата создания
  },
});


module.exports = mongoose.model('User', UserSchema);