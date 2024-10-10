import { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { useProductById } from '../hooks/useProductById';
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import { CartContext } from '../context/CartContext';

const CardItem = () => {
  const { id } = useParams(); 
  const { product, loading } = useProductById(id); 
  
  const [count, setCount] = useState(0); // Estado para el contador
  const { addItem } = useContext(CartContext);

  function handleIncrement() {
    if (product ) {
      setCount(count + 1); // Incrementar contador
    }
  };

  function handleDecrement(){
    if (count > 0) {
      setCount(count - 1); 
    }
  };

  const handleAddToCart = () => {
    if (count > 0) {
      addItem(product, count); 
      setCount(0); 
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    ); // Mostrar un spinner mientras carga
  }

  if (!product) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Text fontSize="2xl">Producto no encontrado</Text>
      </Box>
    ); // Mostrar mensaje si no se encuentra el producto
  }

  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex>
          <Image
            rounded={'md'}
            alt={'Imagen del producto'}
            src={product.image}
            objectFit={'contain'}
            objectPosition={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '350px', lg: '450px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {product.name}
            </Heading>
            <Text color={useColorModeValue('gray.900', 'gray.400')} fontWeight={300} fontSize={'2xl'}>
              ${product.price}
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={'column'} divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize={'2xl'} fontWeight={'300'}>
                {product.description}
              </Text>
            </VStack>
            <Box>
              <Text fontSize={{ base: '16px', lg: '18px' }} color={useColorModeValue('yellow.500', 'yellow.300')} fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
                Características
              </Text>
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Chronograph</ListItem>
                  <ListItem>Master Chronometer Certified</ListItem>
                  <ListItem>Tachymeter</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>Anti‑magnetic</ListItem>
                  <ListItem>Chronometer</ListItem>
                  <ListItem>Small seconds</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text fontSize={{ base: '16px', lg: '18px' }} color={useColorModeValue('yellow.500', 'yellow.300')} fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
                Detalles del Producto
              </Text>
              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>Material:</Text> {product.material}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>Color:</Text> {product.color}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Flex alignItems="center" mt={4}>
            <Button onClick={handleDecrement} mr={4}>-</Button>
            <Text>{count}</Text>
            <Button onClick={handleIncrement} ml={4}>+</Button>
          </Flex>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            onClick={handleAddToCart}
          >
            Agregar al carrito
          </Button>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default CardItem;
