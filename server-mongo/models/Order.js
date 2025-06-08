
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Это наш "чертеж" для каждого заказа в базе данных
const OrderSchema = new Schema({
    // Ссылка на пользователя, который сделал заказ.
    // Это поле связывает заказ с коллекцией 'User'.
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },

    // Массив товаров, которые находятся в этом заказе.
    products: [
        {
            name: { 
                type: String, 
                required: true 
            },
            price: { 
                type: Number, 
                required: true 
            },
            quantity: { 
                type: Number, 
                required: true 
            },
            // Вот поле, которое мы добавили для картинки.
            // Мы будем хранить здесь URL-адрес изображения.
            image: { 
                type: String 
            }
        }
    ],

    // Общая стоимость заказа.
    total: { 
        type: Number, 
        required: true 
    },

    // Статус заказа.
    // `enum` гарантирует, что статус может быть только одним из этих значений.
    status: {
        type: String,
        required: true,
        enum: ['На рассмотрении', 'Оплачен', 'В пути', 'Завершен', 'Отменен'],
        default: 'На рассмотрении' // Статус по умолчанию при создании.
    },
    
    // Дата создания заказа.
    createdAt: { 
        type: Date, 
        default: Date.now 
    }
});

// Экспортируем модель под названием 'Order', чтобы использовать ее в других файлах (например, в /routes/orders.js).
module.exports = mongoose.model('Order', OrderSchema);