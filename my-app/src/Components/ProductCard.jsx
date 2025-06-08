import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import basket from './Header/img/basket.png';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Разбиваем название товара на части по пробелу. 
  // Например, "BLACK stikers" превратится в массив ['BLACK', 'stikers']
  const nameParts = product.name.split(' ');
  const mainTitle = nameParts[0] || ''; // Первая часть названия
  const subTitle = nameParts.slice(1).join(' ') || ''; // Всё, что после первой части

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-darkbluegray my-10 mx-4 group hover:shadow-xl hover:shadow-darkbluegray transition-shadow duration-300 flex flex-col">
      <Link to={`/product/${product.id}`}>
        <div className="overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-80 object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      
      {/* Контейнер для контента карточки, который будет расти */}
      <div className="p-4 flex flex-col flex-grow">
        
        {/* Блок с названием и ценой. Занимает все доступное пространство */}
        <div className="flex-grow mb-4">
          <div className="flex items-start justify-between">
            {/* Название в две строки */}
            <h3 className="text-xl font-semibold">
              <span className="block">{mainTitle}</span>
              <span className="block text-gray-500 font-normal">{subTitle}</span>
            </h3>
            <p className="text-gray-700 text-xl font-bold whitespace-nowrap pl-2">{product.price} РУБ.</p>
          </div>
        </div>

        {/* Кнопки всегда внизу */}
        <div className="flex items-center justify-center space-x-2 mt-auto">
           <Link
            to={`/product/${product.id}`}
            className="flex-grow text-center text-md text-black hover:text-white font-Benzin border-2 border-darkbluegray rounded-sm hover:bg-darkbluegray py-3 px-6 transition-colors duration-200"
          >
            ПОДРОБНЕЕ
          </Link>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center justify-center bg-wisteria border-2 border-darkbluegray rounded-sm hover:bg-darkbluegray p-2 transition-colors duration-200"
            aria-label={`Добавить ${product.name} в корзину`}
          >
            <img src={basket} alt="корзина" className="w-[30px] h-[30px]" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;