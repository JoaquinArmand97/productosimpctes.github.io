import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Productos } from '../pages/Productos'; // Verifica si es mayúscula o minúscula
import { Contacto } from '../pages/contacto'; // Asegúrate de que este nombre coincide
import Home from '../pages/home'; // Asegúrate de que la 'H' esté bien escrita
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

