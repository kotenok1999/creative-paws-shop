// Файл: my-app/src/Components/CatalogSertif.jsx - НОВЫЙ ФАЙЛ

import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { products } from '../data/products';
import ProductCard from './ProductCard';

const CatalogSertif = () => {
  // Фильтруем все товары, чтобы получить только те, у которых категория 'sertif'
  const sertifikaty = products.filter(p => p.category === 'sertif');

  return (
    <div className='font-Benzin'>
      <Header />
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="flex items-center justify-center text-5xl mb-8">ПОДАРОЧНЫЕ СЕРТИФИКАТЫ</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Отображаем отфильтрованные товары с помощью нашей универсальной карточки */}
            {sertifikaty.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CatalogSertif;