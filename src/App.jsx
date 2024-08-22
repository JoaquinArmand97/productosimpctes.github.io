import { Card, ChakraProvider, Box } from '@chakra-ui/react';
import NavBar from './components/navBar/NavBar';
import Carrusel from './components/carrusel/ItemListContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Product from './components/Product/Product';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
      <ItemListContainer greeting="Bienvenidos a Productos Importados" />
      <Box mb={20}>
      <Carrusel /> 
      </Box>
      <Product/>
    </ChakraProvider>
  );
}

export default App;
