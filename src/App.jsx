import { ChakraProvider,  } from '@chakra-ui/react';
import { MainRouter } from './routes/MainRouter';
import NavBar from './components/navBar/NavBar';
import Carrusel from './components/carrusel/Carrusel';
import  Cards from './components/cards/cards';
import Footer from './components/footer/footer';

function App() {
  return (
    <ChakraProvider>      
      <MainRouter/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
