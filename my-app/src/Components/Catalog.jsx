// Файл: my-app/src/Components/Catalog.jsx - ПОЛНАЯ ВЕРСИЯ

import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import stikers from "./img/stikers.png"
import sertifikat from "./img/sertifikat.png"
import stikerbooks from "./img/stikerbooks.png"
import moodpack from "./img/moodpack.png"
import { useNavigate } from 'react-router-dom'

const Catalog = () => {
    const navigate = useNavigate();
  return (
    <div className='font-Benzin'> 
        <Header/>
        <section className='flex justify-center items-center py-10'>
            <div className="px-4 pt-6">
                <h2 className="flex items-center justify-center text-5xl font-bold mb-8">КАТАЛОГ ТОВАРОВ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-10">
                
                    {/* Блок со стикерами */}
                    <div 
                        onClick={() => navigate('/catalogstikers')} 
                        className="bg-white rounded-lg shadow-md border border-darkbluegray shadow-darkbluegray hover:shadow-xl hover:shadow-darkbluegray cursor-pointer transition-shadow"
                    >
                        <div className="flex justify-center items-center m-4">
                            <div className='gap-8 m-10'>
                                <p className="text-3xl ">СТИКЕРЫ</p>
                            </div>
                            <img src={stikers} alt="Стикеры" className="w-60 h-60 mr-4"/>
                        </div>
                    </div>

                    {/* Блок со стикербуками */}
                    <div 
                        onClick={() => navigate('/catalogstikerbook')} 
                        className="bg-white rounded-lg shadow-md border border-darkbluegray shadow-darkbluegray hover:shadow-xl hover:shadow-darkbluegray cursor-pointer transition-shadow"
                    >
                        <div className="flex justify-center items-center m-4">
                            <div className='gap-8 m-10'>
                                <p className="text-3xl ">СТИКЕРБУКИ</p>
                            </div>
                            <img src={stikerbooks} alt="Стикербуки" className="w-60 h-60 mr-4"/>
                        </div>
                    </div>
                
                    {/* Блок с мудпаками */}
                    <div 
                        onClick={() => navigate('/catalogmoodpack')} 
                        className="bg-white rounded-lg shadow-md border border-darkbluegray shadow-darkbluegray hover:shadow-xl hover:shadow-darkbluegray cursor-pointer transition-shadow"
                    >
                        <div className="flex justify-center items-center m-4">
                            <div className='gap-8 m-10'>
                                <p className="text-3xl ">МУДПАКИ</p>
                            </div>
                            <img src={moodpack} alt="Мудпаки" className="w-60 h-60 mr-4"/>
                        </div>
                    </div>

                    {/* Блок с сертификатами */}
                    <div 
                        onClick={() => navigate('/catalogsertif')} 
                        className="bg-white rounded-lg shadow-md border border-darkbluegray shadow-darkbluegray hover:shadow-xl hover:shadow-darkbluegray cursor-pointer transition-shadow"
                    >
                        <div className="flex justify-center items-center m-4">
                            <div className='gap-8 m-10'>
                                <p className="text-3xl ">СЕРТИФИКАТЫ</p>
                            </div>
                            <img src={sertifikat} alt="Сертификаты" className="w-60 h-60 mr-4"/>
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