import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Productos } from '../pages/Productos'; // Verifica si es mayúscula o minúscula
import { Contacto } from '../pages/Contacto'; // Asegúrate de que este nombre coincide
import Home from '../pages/Home'; // Asegúrate de que la 'H' esté bien escrita
import NavBar from '../components/navBar/NavBar';
import CardItem from '../components/cardItem/CardItem'; // Verifica el nombre del componente
import Category from '../pages/Category';

export const MainRouter = () => (
  <BrowserRouter>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/productos/:id" element={<CardItem />} />
      <Route path="/category/:category" element={<Category />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </BrowserRouter>
);

