// Файл: my-app/src/App.js - ПОЛНАЯ ВЕРСИЯ С REACT-HOT-TOAST

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast'; // 1. Импортируем сам "тостер"

// Импорты всех твоих страниц
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
import Checkout from './Components/Checkout';
import Profile from './Components/Profile';
import AdminPanel from './Components/AdminPanel';

function App() {
  return (
    
    <>
      {/* компонент Toaster. */}
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      
      <BrowserRouter>
        <Routes>
          {/* Все маршруты */}
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPanel />} />

          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalogstikers" element={<CatalogStikers />} />
          <Route path="/catalogstikerbook" element={<CatalogStikerbook />} />
          <Route path="/catalogmoodpack" element={<CatalogMoodPack />} />
          <Route path="/catalogsertif" element={<CatalogSertif />} />

          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;