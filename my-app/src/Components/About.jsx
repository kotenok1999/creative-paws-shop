

import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import logo from './Header/img/logotip.png';

const About = () => {
  return (
    <div className="font-Benzin bg-wisterialight min-h-screen">
      <Header />

      <main className="container mx-auto max-w-6xl py-12 px-4">
        
        {/* === ИЗМЕНЕННЫЙ БЛОК ЗАГОЛОВКА === */}
        <div className="text-center mb-16"> {/* Увеличен нижний отступ для большего "воздуха" */}
          {/* Старый заголовок "О НАС" удален. */}
          {/* Слоган теперь главный заголовок h1 */}
          <h1 className="text-4xl md:text-5xl font-bold text-darkbluegray tracking-tight">
            Ваша творческая вселенная в одном клике
          </h1>
        </div>
        {/* ==================================== */}

        {/* СЕКЦИЯ 1: НАША МИССИЯ */}
        <div className="bg-white rounded-lg shadow-xl p-8 mb-12 flex flex-col md:flex-row items-center gap-8">
          <img src={logo} alt="CreativePaws Logo" className="w-48 h-48 flex-shrink-0" />
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-darkbluegray mb-4">
              CREATIVEPAWS — больше, чем просто магазин.
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Мы родились из страсти к творчеству и желания делиться вдохновением. Наша миссия — предоставить вам самые качественные и эстетичные материалы: от уникальных стикеров до продуманных мудпаков. Мы верим, что каждый может создавать красоту, и помогаем вам раскрыть свой потенциал.
            </p>
          </div>
        </div>

        {/* СЕКЦИЯ 2: ЦИФРЫ ГОВОРЯТ САМИ ЗА СЕБЯ */}
        <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-darkbluegray">Наши достижения</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* КАРТОЧКА 1: ОПЫТ */}
          <div className="bg-white rounded-lg shadow-xl p-6 text-center flex flex-col items-center">
             
            <div className="text-6xl font-bold text-wisteria mb-2">5+</div>
            <h3 className="text-xl font-semibold text-darkbluegray">Лет на рынке</h3>
            <p className="text-gray-600 mt-2">Создаем и вдохновляем с 2019 года.</p>
          </div>

          {/* КАРТОЧКА 2: ЗАКАЗЫ */}
          <div className="bg-white rounded-lg shadow-xl p-6 text-center flex flex-col items-center">
           
            <div className="text-6xl font-bold text-wisteria mb-2">30,000+</div>
            <h3 className="text-xl font-semibold text-darkbluegray">Отправленных заказов</h3>
            <p className="text-gray-600 mt-2">Посылки с радостью летят во все уголки мира.</p>
          </div>

          {/* КАРТОЧКА 3: КЛИЕНТЫ */}
          <div className="bg-white rounded-lg shadow-xl p-6 text-center flex flex-col items-center">
            
            <div className="text-6xl font-bold text-wisteria mb-2">99%</div>
            <h3 className="text-xl font-semibold text-darkbluegray">Счастливых клиентов</h3>
            <p className="text-gray-600 mt-2">Ваши восторженные отзывы — наша главная награда.</p>
          </div>
        </div>

        {/* СЕКЦИЯ 3: КОНТАКТЫ И СООБЩЕСТВО */}
        <div className="bg-white rounded-lg shadow-xl p-8 text-center">
            <h2 className="text-3xl font-bold text-darkbluegray mb-4">
                Присоединяйтесь к нашему сообществу!
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
                Следите за новинками, участвуйте в акциях и общайтесь с единомышленниками в наших социальных сетях. Мы всегда на связи и рады ответить на любые ваши вопросы.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                 <a href="https://vk.com" target="_blank" rel="noopener noreferrer" className="bg-darkbluegray text-white py-3 px-8 rounded-lg text-lg hover:bg-wisteria transition-colors duration-300">
                    Мы ВКонтакте
                </a>
                <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="bg-darkbluegray text-white py-3 px-8 rounded-lg text-lg hover:bg-wisteria transition-colors duration-300">
                    Наш Telegram
                </a>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
                <p className="text-gray-600">Для предложений и сотрудничества:</p>
                <a href="mailto:hello@creativepaws.com" className="text-xl text-wisteria hover:underline font-semibold">
                    hello@creativepaws.com
                </a>
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;