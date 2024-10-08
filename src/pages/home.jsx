import Carrusel from '../components/carrusel/Carrusel';
import Cards from '../components/cards/cards';
import PlanCanje from '../components/PlanCanje/PlanCanje';
import CardPromotion from '../components/CardPromotion/CardPromotion';

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
