import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Delivery = () => {
   const navigate = useNavigate();
  return (
    <div className="font-Benzin min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="flex justify-center items-center py-12">
          <div className="container">
            <div className="flex justify-center items-center px-4 pt-6 space-x-4">
              <h2 className="text-5xl font-bold border-b-2 border-black pb-2">ДОСТАВКА</h2>
              <h2  onClick={() =>navigate('/payment')} className="border-b-2 border-wisteria pb-2 text-wisteria text-5xl font-bold hover:text-black hover:border-black">ОПЛАТА</h2>
            </div>

            <div className="overflow-x-auto mt-8"> {/* Добавлено mt-8 для отступа */}
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Способ доставки
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Стоимость доставки
                    </th>
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Срок доставки (в среднем)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Простое письмо
                      <div className="text-gray-500">Отправка Почтой России</div>
                      <div className="text-gray-500">Приходит в почтовый ящик</div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">149 ₽</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      От 2 до 15 рабочих дней в зависимости от региона
                      <div className="text-gray-500 mt-1">
                        Если после отправки спустя 40 дней вам не пришел заказ -<br/> свяжитесь с нашей службой поддержки!
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Заказным письмом с трек-кодом
                      <div className="text-gray-500">Отправка Почтой России</div>
                      <div className="text-gray-500">
                        Приходит в отделение почты, получение по паспорту / эл. подписи
                      </div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">199 ₽</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      От 2 до 15 рабочих дней в зависимости от региона
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Отложенная доставка заказным письмом
                      <div className="text-gray-500">Отправка Почтой России</div>
                      <div className="text-gray-500">Можно дополнять 30 дней</div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">269 ₽</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      От 2 до 15 рабочих дней в зависимости от региона
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Boxberry
                      <div className="text-gray-500">Приходит в выбранный ПВЗ</div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">от 179 ₽</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      От 2 до 10 рабочих дней в зависимости от региона
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      CDEK
                      <div className="text-gray-500">Приходит в выбранный ПВЗ</div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">от 209 ₽</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      От 2 до 10 рабочих дней в зависимости от региона
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      Yandex
                      <div className="text-gray-500">Приходит в выбранный ПВЗ</div>
                    </td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">от 179 ₽</td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      От 2 до 10 рабочих дней в зависимости от региона
                    </td>
                  </tr>
                  <tr>
                    <td className="px-5 py-5 bg-white text-sm">
                      Доставка за пределы России
                      <div className="text-gray-500">Заказная с трек-кодом</div>
                    </td>
                    <td className="px-5 py-5 bg-white text-sm">от 690 ₽</td>
                    <td className="px-5 py-5 bg-white text-sm">
                      Может занимать до 90 рабочих дней
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Delivery