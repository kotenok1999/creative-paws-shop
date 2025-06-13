import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetail = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState('');

  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images[0]);
    } else {
      navigate('/catalog');
    }
  }, [productId, navigate]);

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  if (!product) {
    return <div>Загрузка...</div>;
  }

  return (
    <div className='font-Benzin bg-wisterialight min-h-screen'>
      <Header />
      <section className='container mx-auto py-10'>
        <div className='flex justify-center bg-white shadow-xl rounded-lg mx-10 my-4 py-10'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-8'>
            {/* Блок с изображениями */}
            <div className='flex flex-col-reverse md:flex-row gap-4'>
              <div className='flex md:flex-col gap-2 justify-center md:justify-start'>
                {product.images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Миниатюра ${index + 1}`}
                    className={`w-20 h-20 object-cover cursor-pointer border-2 transition-all ${mainImage === img ? 'border-darkbluegray scale-105' : 'border-transparent'}`}
                    onClick={() => handleThumbnailClick(img)}
                  />
                ))}
              </div>
              <div className='flex-grow'>
                <img src={mainImage} alt={product.name} className='w-full h-auto max-h-[500px] object-contain border-4 border-wisteria rounded-md' />
              </div>
            </div>

            {/* Блок с информацией о товаре */}
            <div className="flex flex-col">
              <h1 className="text-4xl md:text-5xl font-Benzin text-black mt-6 mb-2 font-bold">
                {product.name}
              </h1>
              <h2 className="text-3xl font-Benzin text-black mb-6 font-bold">{product.price} РУБ.</h2>

              
              <div className='flex items-center space-x-4'>
                <button
                  onClick={() => addToCart(product)}
                  className="text-lg text-white font-Benzin bg-wisteria border-2 border-darkbluegray rounded-sm hover:bg-darkbluegray py-3 px-12 transition-colors duration-200"
                >
                  В КОРЗИНУ
                </button>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-Benzin text-black mb-2 font-bold border-b-2 border-gray-300 pb-2">
                  ОПИСАНИЕ
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line pt-2">
                  {product.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProductDetail;