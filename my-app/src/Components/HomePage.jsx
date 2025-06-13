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

  // === ДАННЫЕ ДЛЯ СЛАЙДЕРА И ОТЗЫВОВ ===
  const slides = [
    {
      title: 'СТИКЕРБУК',
      subtitle: 'КОЛЛЕКЦИЯ СТИКЕРБУКОВ А5',
      description: 'Откройте для себя мир уникальных наклеек, собранных в удобном формате. Идеально для вашего творчества!',
      image: stikerbook,
      buttonText: 'ПОДРОБНЕЕ',
      link: '/catalogstikerbook',
      backgroundColor: 'from-jacarta via-darkbluegray to-jacarta',
    },
    {
      title: 'ПОДАРОЧНЫЙ',
      title2: 'СЕРТИФИКАТ',
      description: 'Лучший подарок для творческого человека. Подарите свободу выбора и вдохновение!',
      image: sertifikat,
      buttonText: 'СМОТРЕТЬ',
      link: '/catalogsertif',
      backgroundColor: 'from-darkbluegray via-pinklavand to-darkbluegray',
    },
  ];

  const popularProductIds = ['black-stiker-001','flowers-stiker-002','pink-stikerbook-001','cats-stiker-003','rockstar-moodpack-001'];
  const popularProducts = popularProductIds.map(id => products.find(product => product.id === id)).filter(Boolean);
  const reviews = [ { id: 1, name: 'Мария Петрова', date: '05.10.2023', text: 'Долго я сомневалась заказывать или нет... Качество на высшем уровне. Спасибо!', avatar: otzzz,}, { id: 2, name: 'Иван Иванов', date: '12.10.2023', text: 'Отличный сервис! Быстрая доставка и качественный товар. Рекомендую!', avatar: otz,}, { id: 3, name: 'Сергей Сидоров', date: '28.09.2023', text: 'Первый раз заказывал стикеры здесь, глаза просто разбегались от выбора. Очень качественные и красивые.', avatar: otzz,}, { id: 4, name: 'Анна В.', date: '15.09.2023', text: 'Все отлично! Быстро, удобно и качественно. Мудпак "Rockstar" просто бомба, очень вдохновляет.', avatar: otzzz, }, { id: 5, name: 'Екатерина Смирнова', date: '02.09.2023', text: 'Заказывала в подарок подруге, она в полном восторге! Стикербук PINK - это что-то невероятное.', avatar: otzzz, }, { id: 6, name: 'Дмитрий Козлов', date: '25.08.2023', text: 'Невероятная эстетика и внимание к деталям. Каждый стикер - маленькое произведение искусства.', avatar: otz, }, { id: 7, name: 'Ольга Морозова', date: '19.08.2023', text: 'Возникли вопросы по доставке, ответили очень быстро и вежливо. Спасибо за прекрасный сервис!', avatar: otzzz, } ];
  const reviewsContainerRef = useRef(null);
  
  // Логика слайдера
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); 
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  const prevSlide = () => setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  const goToSlide = (index) => setSlideIndex(index);
  const handleReviewScroll = (direction) => { const container = reviewsContainerRef.current; if (container) { const scrollAmount = container.firstChild.offsetWidth + 24; container.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' }); } };

  return (
    <div className='font-Benzin bg-wisterialight'>
        <Header/>
        
        {/* === СЛАЙДЕР === */}
        <main className='container mx-auto py-4'>
          <div className="overflow-hidden relative rounded-xl shadow-2xl">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${slideIndex * 100}%)` }}
            >
              {slides.map((slide, i) => (
                <div
                  key={i} 
                  className={`flex-shrink-0 w-full flex flex-col lg:flex-row items-center justify-center lg:justify-between p-8 lg:p-12 min-h-[600px] bg-gradient-to-r ${slide.backgroundColor}`}
                >
                  
                  <div key={slideIndex} className='w-full lg:w-1/2 text-center lg:text-right lg:pr-8'>
                    <h1 className='text-6xl lg:text-8xl font-black text-white my-4 uppercase tracking-wider animate-fade-in-down' style={{animationDelay: '0.2s'}}>
                        {slide.title}
                        {slide.title2 && <span className="block">{slide.title2}</span>}
                    </h1>
                    <p className='text-xl text-white/80 my-4 animate-fade-in-down' style={{animationDelay: '0.4s'}}>
                        {slide.description}
                    </p>
                    <div className='my-10 animate-fade-in-up' style={{animationDelay: '0.6s'}}>
                      <button onClick={() => navigate(slide.link)} className='text-2xl font-Benzin text-white py-4 px-12 bg-white/10 border-2 border-white rounded-md hover:bg-white hover:text-darkbluegray transition-all duration-300 transform hover:scale-105 shadow-lg'>
                        {slide.buttonText}
                      </button>
                    </div>
                  </div>
                  {/* Правая часть: Картинка с анимацией */}
                  <div className='w-full lg:w-1/2 mt-8 lg:mt-0 animate-fade-in-up' style={{animationDelay: '0.3s'}}>
                    <img src={slide.image} alt='slide' className='max-h-[500px] object-contain mx-auto drop-shadow-2xl' />
                  </div>
                </div>
              ))}
            </div>
            {/* Стрелки */}
            <button onClick={prevSlide} className='absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-3 hover:bg-black/50 transition-colors z-10' aria-label="Previous slide">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button onClick={nextSlide} className='absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 rounded-full p-3 hover:bg-black/50 transition-colors z-10' aria-label="Next slide">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
            </button>
            {/* Индикаторы-точки */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => goToSlide(index)} className={`h-3 rounded-full transition-all duration-300 ${slideIndex === index ? 'bg-white w-8' : 'bg-white/50 w-3'}`}></button>
                ))}
            </div>
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