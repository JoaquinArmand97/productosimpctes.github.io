import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Productos } from '../pages/Productos';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/productos" element={<Productos />} />
        <Route path="/" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
};
