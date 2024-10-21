import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Productos } from '../pages/Productos';
import { Contacto } from '../pages/contacto'; 
import Home from '../pages/home'; 
import NavBar from '../components/navBar/NavBar';
import CardItem from '../components/cardItem/cardItem'; 
import Category from '../pages/Category';
import Checkout from '../pages/checkout';


export const MainRouter = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:id" element={<CardItem />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/checkout" element={<Checkout />} />

    </Routes>
  </BrowserRouter>
);

