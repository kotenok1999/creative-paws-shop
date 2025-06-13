import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import { useNavigate } from 'react-router-dom'

const Payment = () => {
  const navigate = useNavigate()
  return (
    <div className="font-Benzin min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="flex justify-center items-center py-12">
          <div className="container">
            <div className="flex justify-center items-center px-4 pt-6 space-x-4">
              <h2
                onClick={() => navigate('/delivery')}
                className="border-b-2 border-wisteria pb-2 text-wisteria text-5xl font-bold hover:text-black hover:border-black cursor-pointer" // Добавлено cursor-pointer
              >
                ДОСТАВКА
              </h2>
              <h2 className="text-5xl font-bold border-b-2 border-black pb-2 ">ОПЛАТА</h2>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Контейнер 1*/}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Банковской картой</h3>
                <p className="text-gray-600">Оплата с помощью Visa, Mastercard, Мир и других карт.</p>
              </div>

              {/* Контейнер 2*/}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Яндекс.Деньги</h3>
                <p className="text-gray-600">Оплата через кошелек Яндекс.Деньги.</p>
              </div>

              {/* Контейнер 3*/}
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">Переводом</h3>
                <p className="text-gray-600">Прямой банковский перевод.</p>
              </div>
            </div>

            {/* Дополнительная информация */}
            <div className="mt-8 text-center">
              <p className="text-gray-700">
                При выборе любого из этих способов, просто следуйте инструкциям на экране. Уверены, что затруднений не возникнет, так как это не сложнее чем
                пополнить баланс мобильного телефона.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default Payment