import { ChakraProvider,  } from '@chakra-ui/react';
import { MainRouter } from './routes/MainRouter';
import NavBar from './components/navBar/NavBar';
import Carrusel from './components/carrusel/Carrusel';
import  Cards from './components/cards/cards';

function App() {
  return (
    <ChakraProvider>
      <NavBar />
     <Carrusel/>
     <Cards/>
     <MainRouter/>
    </ChakraProvider>
  );
}

export default App;
