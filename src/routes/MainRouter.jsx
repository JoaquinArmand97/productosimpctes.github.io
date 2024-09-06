import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Productos } from '../pages/Productos';
import { Contacto } from '../pages/contacto';
import Home from '../pages/home';
import NavBar from '../components/navBar/NavBar';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/productos" element={< Productos />} />
        <Route path="/contacto" element={< Contacto />} />
        <Route path="/" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
};
