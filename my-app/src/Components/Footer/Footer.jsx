import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer class="bg-osnblack py-8">
  <div class="container mx-auto px-4 ">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mx-10 my-10 ">

      
    
          {/* === nav === */}
      
      <div className='space-y-6'>
        
        <ul class="space-y-2">
            <li><button onClick={() =>navigate('/')} class="text-white text-xl hover:underline hover:text-white ">ГЛАВНАЯ</button></li>
            <li><button onClick={() =>navigate('/about')} class="text-white text-xl hover:underline hover:text-white ">О НАС</button></li>
            <li><button onClick={() =>navigate('/delivery')} class="text-white text-xl hover:underline hover:text-white ">ДОСТАВКА И ОПЛАТА</button></li>
            

          
          
        </ul>
      </div>
      {/* === ССЫЛКИ НА СОЦ.СЕТИ === */}
      
      <div className='space-y-6 text-right'>
        
        <ul class="space-y-6">
          <li><a  href="https://vk.com/club228670752" class=" text-4xl text-darkbluegray hover:underline hover:text-darkbluegray">
            ВКОНТАКТЕ
          </a></li>
         <li><a href="https://t.me/cretive_paws" class=" text-4xl text-darkbluegray hover:underline hover:text-darkbluegray">
            ТЕЛЕГРАМ
          </a></li>
          
          

        </ul>
      </div>
    </div>
    
    
  </div><div class="text-center text-gray-100 border-t-2 border-gray-300 mt-4">
      <p className='mt-4'>
      CREATIVE PAWS &copy; 2025  Все права защищены.</p>
    </div>
</footer>
  )
}

export default Footer