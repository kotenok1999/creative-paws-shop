import React, { useState } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import aboutStoryImage from './img/fotoo.png';
import toast from 'react-hot-toast'; 

const About = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
            const response = await fetch(`${apiUrl}/api/feedback`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            if (!response.ok) throw new Error(data.message);
            
            toast.success(data.message); 
            setFormData({ name: '', email: '', subject: '', message: '' });
        } catch (error) {
            toast.error(error.message); 
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="font-Benzin bg-wisterialight min-h-screen">
            <Header />
            <main>
                <div className="bg-white w-full py-16 md:py-24">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center px-4">
                        <div className="rounded-lg overflow-hidden h-full max-h-[450px]">
                            <img src={aboutStoryImage} alt="Наша история" className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center md:text-left">
                            <h2 className="text-3xl font-bold text-darkbluegray mb-4">Ваша творческая вселенная в одном клике</h2>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                CREATIVEPAWS — это больше, чем просто магазин. Мы родились из страсти к творчеству и желания делиться вдохновением. Наша миссия — предоставить вам самые качественные и эстетичные материалы: от уникальных стикеров до продуманных мудпаков. Мы верим, что каждый может создавать красоту, и помогаем вам раскрыть свой потенциал.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto max-w-6xl py-12 px-4">
                    <div className="text-center mt-4 mb-12"><h2 className="text-4xl font-bold">Наши достижения</h2></div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        <div className="bg-white rounded-lg shadow-xl p-6 text-center flex flex-col items-center"><div className="text-6xl font-bold text-jacarta mb-2">5+</div><h3 className="text-xl font-semibold text-darkbluegray">Лет на рынке</h3><p className="text-gray-600 mt-2">Создаем и вдохновляем с 2019 года.</p></div>
                        <div className="bg-white rounded-lg shadow-xl p-6 text-center flex flex-col items-center"><div className="text-6xl font-bold text-jacarta mb-2">30,000+</div><h3 className="text-xl font-semibold text-darkbluegray">Отправленных заказов</h3><p className="text-gray-600 mt-2">Посылки с радостью летят во все уголки мира.</p></div>
                        <div className="bg-white rounded-lg shadow-xl p-6 text-center flex flex-col items-center"><div className="text-6xl font-bold text-jacarta mb-2">99%</div><h3 className="text-xl font-semibold text-darkbluegray">Счастливых клиентов</h3><p className="text-gray-600 mt-2">Ваши восторженные отзывы — наша главная награда.</p></div>
                    </div>

                    {/* === форма обратнйо связи === */}
                    <div className="bg-white rounded-lg shadow-xl p-8 mt-16">
                        <h2 className="text-3xl font-bold text-center mb-2">Свяжитесь с нами</h2>
                        <p className="text-center text-gray-600 mb-8">Есть вопросы, предложения или хотите сотрудничать? Мы всегда на связи!</p>
                        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4">
                            <input type="text" name="name" placeholder="Ваше имя" value={formData.name} onChange={handleChange} required className="w-full p-3 border rounded-md" />
                            <input type="email" name="email" placeholder="Ваш Email" value={formData.email} onChange={handleChange} required className="w-full p-3 border rounded-md" />
                            <input type="text" name="subject" placeholder="Тема сообщения" value={formData.subject} onChange={handleChange} required className="w-full p-3 border rounded-md" />
                            <textarea name="message" placeholder="Ваше сообщение..." value={formData.message} onChange={handleChange} required rows="5" className="w-full p-3 border rounded-md"></textarea>
                            <button type="submit" disabled={isSubmitting} className="w-full bg-darkbluegray text-white text-xl py-3 rounded-lg hover:bg-wisteria transition-colors disabled:bg-gray-400">
                                {isSubmitting ? 'Отправка...' : 'Отправить'}
                            </button>
                        </form>
                    </div>
                    <div className="text-center mt-12">
                        <h3 className="text-2xl font-bold text-darkbluegray">Присоединяйтесь к нашему сообществу</h3>
                        <p className="text-lg text-gray-700 my-4 max-w-2xl mx-auto">
                            Следите за новинками, участвуйте в акциях и общайтесь с единомышленниками в наших социальных сетях.
                        </p>
                        <div className="flex justify-center items-center gap-4">
                            <a href="https://vk.com/club228670752" target="_blank" rel="noopener noreferrer" className="bg-darkbluegray text-white py-3 px-8 rounded-lg text-lg hover:bg-wisteria transition-colors duration-300">Мы ВКонтакте</a>
                            <a href="https://t.me/cretive_paws" target="_blank" rel="noopener noreferrer" className="bg-darkbluegray text-white py-3 px-8 rounded-lg text-lg hover:bg-wisteria transition-colors duration-300">Наш Telegram</a>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default About;