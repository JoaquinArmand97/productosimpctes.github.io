import { ChakraProvider,  } from '@chakra-ui/react';
import NavBar from '../components/navBar/NavBar';
import Carrusel from '../components/carrusel/Carrusel';
import Cards from '../components/cards/cards';
import CardPromotion from '../components/CardPromotion/cardPromotion';
import PlanCanje from '../components/PlanCanje/PlanCanje';

function Home() {
  return (
    <div>
        <Carrusel/>
        <Cards/>
        <CardPromotion/>
        <PlanCanje/>
    </div>
  );
}

export default Home;
