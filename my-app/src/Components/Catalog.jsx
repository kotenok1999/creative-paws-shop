// Файл: my-app/src/Components/Catalog.jsx - ВЕРСИЯ С ВЕРТИКАЛЬНЫМИ БЛОКАМИ ДЛЯ ВСЕХ ЭКРАНОВ

import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import stikers from "./img/stikers.png"
import sertifikat from "./img/sertifikatt.png"
import stikerbooks from "./img/stikerbooks.png"
import moodpack from "./img/moodpack.png"
import { useNavigate } from 'react-router-dom'

const Catalog = () => {
    const navigate = useNavigate();
  return (
    <div className='font-Benzin'> 
        <Header/>
        <section className='flex justify-center items-center py-10'>
            <div className="px-4 pt-6 w-full max-w-6xl">
                <h2 className="flex items-center justify-center text-4xl md:text-5xl font-bold mb-8">КАТАЛОГ ТОВАРОВ</h2>
                
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 m-4">
                
                    {/* Блок со стикерами */}
                    <div 
                        onClick={() => navigate('/catalogstikers')} 
                        className="bg-white rounded-lg shadow-md border border-darkbluegray shadow-darkbluegray hover:shadow-xl hover:shadow-darkbluegray cursor-pointer transition-shadow"
                    >
                        
                        <div className="flex flex-col justify-center items-center p-6 gap-4">
                            <p className="text-3xl font-semibold">СТИКЕРЫ</p>
                            <img src={stikers} alt="Стикеры" className="w-48 h-48"/>
                        </div>
                    </div>

                    {/* Блок со стикербуками */}
                    <div 
                        onClick={() => navigate('/catalogstikerbook')} 
                        className="bg-white rounded-lg shadow-md border border-darkbluegray shadow-darkbluegray hover:shadow-xl hover:shadow-darkbluegray cursor-pointer transition-shadow"
                    >
                        <div className="flex flex-col justify-center items-center p-6 gap-4">
                            <p className="text-3xl font-semibold">СТИКЕРБУКИ</p>
                            <img src={stikerbooks} alt="Стикербуки" className="w-48 h-48"/>
                        </div>
                    </div>
                
                    {/* Блок с мудпаками */}
                    <div 
                        onClick={() => navigate('/catalogmoodpack')} 
                        className="bg-white rounded-lg shadow-md border border-darkbluegray shadow-darkbluegray hover:shadow-xl hover:shadow-darkbluegray cursor-pointer transition-shadow"
                    >
                        <div className="flex flex-col justify-center items-center p-6 gap-4">
                            <p className="text-3xl font-semibold">МУДПАКИ</p>
                            <img src={moodpack} alt="Мудпаки" className="w-48 h-48"/>
                        </div>
                    </div>

                    {/* Блок с сертификатами */}
                    <div 
                        onClick={() => navigate('/catalogsertif')} 
                        className="bg-white rounded-lg shadow-md border border-darkbluegray shadow-darkbluegray hover:shadow-xl hover:shadow-darkbluegray cursor-pointer transition-shadow"
                    >
                        <div className="flex flex-col justify-center items-center p-6 gap-4">
                            <p className="text-3xl font-semibold">СЕРТИФИКАТЫ</p>
                            <img src={sertifikat} alt="Сертификаты" className="w-48 h-48"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default Catalog