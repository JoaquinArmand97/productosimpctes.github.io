import { ChakraProvider,  } from '@chakra-ui/react';
import NavBar from '../components/navBar/NavBar';
import Carrusel from '../components/carrusel/Carrusel';
import Cards from '../components/cards/cards';
import CardPromotion from '../components/CardPromotion/cardPromotion';


function Home() {
  return (
    <div>
        <Carrusel/>
        <Cards/>
        <CardPromotion/>
    </div>
  );
}

export default Home;
