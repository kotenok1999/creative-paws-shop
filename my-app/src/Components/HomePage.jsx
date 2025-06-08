// Файл: my-app/src/Components/HomePage.jsx - ПОЛНАЯ ВЕРСИЯ

import React, { useState, useEffect, useRef } from 'react';
import Header from "./Header/Header"
import sertifikat from "./img/sertifikat.png"
import stikerbook from "./img/stikerbook.png"
import otz from "./img/dmitry.webp"
import otzz from "./img/kirill.webp"
import otzzz from "./img/natalya.webp"
import Footer from './Footer/Footer';
import { useNavigate } from 'react-router-dom';
import ProductCard from './ProductCard';
import { products } from '../data/products';

const HomePage = () => {
  const navigate = useNavigate();
  const [slideIndex, setSlideIndex] = useState(0);

  const slides = [
    {
      title: 'СТИКЕРБУК',
      subtitle: 'КОЛЛЕКЦИЯ СТИКЕРБУКОВ А5',
      image: stikerbook,
      buttonText: 'ПОДРОБНЕЕ',
      link: '/catalogstikerbook',
      backgroundColor: 'from-jacarta via-darkbluegray to-jacarta',
    },
    {
      title: 'ПОДАРОЧНЫЙ',
      title2: 'СЕРТИФИКАТ',
      image: sertifikat,
      buttonText: 'СМОТРЕТЬ',
      link: '/catalogsertif', // Наша обновленная ссылка
      backgroundColor: 'from-darkbluegray via-pinklavand to-darkbluegray',
    },
  ];
  
  const popularProductIds = [
    'black-stiker-001',
    'flowers-stiker-002',
    'pink-stikerbook-001',
    'cats-stiker-003',
    'rockstar-moodpack-001'
  ];
  const popularProducts = popularProductIds
    .map(id => products.find(product => product.id === id))
    .filter(Boolean);

  const reviews = [ { id: 1, name: 'Мария Петрова', date: '05.10.2023', text: 'Долго я сомневалась заказывать или нет, и также долго решалась писать отзыв или нет. Но вот наступил этот день. Хочу сказать, что я просто в восторге от этих стикеров, качество на высшем уровне. Спасибо!', avatar: otzzz, }, { id: 2, name: 'Иван Иванов', date: '12.10.2023', text: 'Отличный сервис! Быстрая доставка и качественный товар. Упаковано с душой, приятно было распаковывать. Рекомендую!', avatar: otz, }, { id: 3, name: 'Сергей Сидоров', date: '28.09.2023', text: 'Первый раз заказывал стикеры здесь, глаза просто разбегались от выбора. Стикеры очень качественные и красивые. Хочется рассматривать и рассматривать. Буду заказывать еще.', avatar: otzz, }, { id: 4, name: 'Анна В.', date: '15.09.2023', text: 'Все отлично! Быстро, удобно и качественно. Мудпак "Rockstar" просто бомба, очень вдохновляет. Спасибо!', avatar: otzzz, }, { id: 5, name: 'Екатерина Смирнова', date: '02.09.2023', text: 'Заказывала в подарок подруге, она в полном восторге! Стикербук PINK - это что-то невероятное. Уже планирую свой заказ.', avatar: otzzz, }, { id: 6, name: 'Дмитрий Козлов', date: '25.08.2023', text: 'Невероятная эстетика и внимание к деталям. Каждый стикер - маленькое произведение искусства. Упаковка - отдельный вид наслаждения. 10/10.', avatar: otz, }, { id: 7, name: 'Ольга Морозова', date: '19.08.2023', text: 'Возникли вопросы по доставке, написала в поддержку. Ответили очень быстро и вежливо, все решили. Спасибо за прекрасный сервис и крутые товары!', avatar: otzzz, } ];

  const reviewsContainerRef = useRef(null);

  useEffect(() => { const interval = setInterval(() => { setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length); }, 10000); return () => clearInterval(interval); }, [slides.length]);

  const nextSlide = () => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prevSlide = () => setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  
  const handleReviewScroll = (direction) => { const container = reviewsContainerRef.current; if (container) { const scrollAmount = container.firstChild.offsetWidth + 24; container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' }); } };

  return (
    <div className='font-Benzin bg-wisterialight'>
        <Header/>
        
        {/* Главный слайдер */}
        <main className='container mx-auto py-4'>
          <div className="overflow-hidden relative rounded-xl">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${slideIndex * 100}%)` }}>
              {slides.map((slide) => (
                <div key={slide.title} className={`flex-shrink-0 w-full flex items-center justify-between p-8 bg-gradient-to-r ${slide.backgroundColor}`}>
                  <div className='flex-1 text-right pr-8'>
                    <h1 className='text-6xl font-Benzin text-white my-4'>{slide.title}</h1>
                    {slide.title2 && <h1 className='text-6xl font-Benzin text-white my-4'>{slide.title2}</h1>}
                    <h2 className='text-2xl font-Benzin text-white my-4'>{slide.subtitle}</h2>
                    <div className='my-10'>
                      <button onClick={() => navigate(slide.link)} className='text-2xl font-Benzin text-white py-3 px-10 border-2 border-white rounded-md hover:bg-white hover:text-darkbluegray transition-colors duration-300'>
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                  <div className='w-1/2'>
                    <img src={slide.image} alt='slide' className='max-h-[500px] object-contain mx-auto' />
                  </div>
                </div>
              ))}
            </div>
            <button onClick={prevSlide} className='absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors' aria-label="Previous slide"></button>
            <button onClick={nextSlide} className='absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors' aria-label="Next slide"></button>
          </div>
        </main>

        {/* Секция "Популярно сейчас" */}
        <section className="py-12">
            <div className="container mx-auto px-4">
                 <h2 className="text-center text-5xl mb-8">ПОПУЛЯРНО СЕЙЧАС</h2>
            </div>
            <div className="group w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                <div className="flex animate-marquee group-hover:[animation-play-state:paused]">
                    {popularProducts.map((product) => (
                        <div key={product.id} className="flex-shrink-0 mx-4" style={{ width: '350px' }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                    {popularProducts.map((product) => (
                        <div key={`${product.id}-duplicate`} className="flex-shrink-0 mx-4" style={{ width: '350px' }}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Секция "Отзывы" */}
        <section className="py-12 bg-wisterialight">
          <div className="container mx-auto px-4">
            <h2 className="text-center text-5xl mb-4 text-black">НАШИ КЛИЕНТЫ ГОВОРЯТ</h2>
            <p className="text-center text-gray-700 text-lg mb-12">Что думают о нас те, кто уже получил свою порцию вдохновения</p>
            <div className="relative">
                <button onClick={() => handleReviewScroll(-1)} className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white text-darkbluegray rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors" aria-label="Предыдущий отзыв">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                </button>
                <div ref={reviewsContainerRef} className="flex overflow-x-auto snap-x snap-mandatory py-4 -mx-4 px-4 gap-6 [scrollbar-width:none] [-ms-overflow-style:none]">
                  {reviews.map((review) => (
                    <div key={review.id} className="snap-center flex-shrink-0 w-80 md:w-96 bg-white rounded-xl shadow-lg p-6 border-t-4 border-wisteria">
                      <div className="flex items-center mb-4">
                        <img src={review.avatar} alt={`Аватар ${review.name}`} className="w-14 h-14 rounded-full mr-4 border-2 border-white" />
                        <div>
                          <p className="font-bold text-lg text-darkbluegray">{review.name}</p>
                          <p className="text-gray-500 text-sm">{review.date}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
                <button onClick={() => handleReviewScroll(1)} className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white text-darkbluegray rounded-full w-12 h-12 flex items-center justify-center shadow-lg hover:bg-gray-200 transition-colors" aria-label="Следующий отзыв">
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </button>
            </div>
          </div>
        </section>
        
        <Footer/>
    </div>
  );
}

export default HomePage;