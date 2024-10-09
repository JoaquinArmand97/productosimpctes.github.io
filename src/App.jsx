import { ChakraProvider,  } from '@chakra-ui/react';
import { MainRouter } from './routes/MainRouter';
import Footer from './components/footer/footer';
import { CartProvider } from './components/context/CartContext';


function App() {
  return (
    <ChakraProvider>      
      <CartProvider> 
      <MainRouter/>
      </CartProvider> 
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
