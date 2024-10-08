import { ChakraProvider,  } from '@chakra-ui/react';
import { MainRouter } from './routes/MainRouter';
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
