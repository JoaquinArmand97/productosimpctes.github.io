import { ChakraProvider,  } from '@chakra-ui/react';
import NavBar from '../components/navBar/NavBar';
import Carrusel from '../components/carrusel/Carrusel';
import Cards from '../components/cards/cards';

function Home() {
  return (
    <div>
        <Carrusel/>
        <Cards/>
        
    </div>
  );
}

export default Home;
