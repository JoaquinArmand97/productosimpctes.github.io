import { ChakraProvider } from '@chakra-ui/react';
import NavBar from './components/navBar/NavBar';
import Carrusel from './components/carrusel/ItemListContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Productos Importados" />

      <Carrusel /> 
    </ChakraProvider>
  );
}

export default App;
