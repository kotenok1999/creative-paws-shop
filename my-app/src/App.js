import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import './index.css';
import About from "./Components/About";
import Delivery from "./Components/Delivery";
import Payment from "./Components/Payment";
import Catalog from "./Components/Catalog";
import CatalogStikers from "./Components/CatalogStikers";
import CatalogStikerbook from "./Components/CatalogStikerbook";
import CatalogMoodPack from "./Components/CatalogMoodPack";
import CatalogSertif from './Components/CatalogSertif';
import ProductDetail from "./Components/ProductDetail"; 
import Register from './Components/Register'; 
import Login from './Components/Login';
import Cart from './Components/Cart';
import Profile from './Components/Profile';
import AdminPanel from './Components/AdminPanel';
import Checkout from './Components/Checkout';

function App() {
  return (
    // <CartProvider> был здесь, но мы его перенесли в index.js, что более правильно.
    // Убираем его отсюда, чтобы избежать лишнего ререндера и ошибок.
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} /> 
        <Route path="/admin" element={<AdminPanel />} />
         <Route path="/checkout" element={<Checkout />} />

        {/* Маршруты каталога */}
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/catalogstikers" element={<CatalogStikers />} />
        <Route path="/catalogstikerbook" element={<CatalogStikerbook />} />
        <Route path="/catalogmoodpack" element={<CatalogMoodPack />} />
        <Route path="/catalogsertif" element={<CatalogSertif />} />

        {/* Динамический маршрут для всех товаров */}
        <Route path="/product/:productId" element={<ProductDetail />} />
        
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;