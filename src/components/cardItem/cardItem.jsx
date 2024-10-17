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
  const [count, setCount] = useState(0);
  const { addItem , removeItem} = useContext(CartContext);

  // Colores y estilos
  const priceTextColor = useColorModeValue('gray.900', 'gray.400');
  const headerBg = useColorModeValue('gray.900', 'gray.50');
  const buttonTextColor = useColorModeValue('white', 'gray.900');
  const featuresTitleColor = useColorModeValue('yellow.500', 'yellow.300');
  const detailsTitleColor = useColorModeValue('yellow.500', 'yellow.300');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const descriptionColor = useColorModeValue('gray.500', 'gray.400');

  const handleIncrement = () => {
    setCount(prevCount => {
      const newCount = prevCount + 1;
      addItem(product, newCount);
      return newCount; 
    });
  };
  
  const handleDecrement = () => {
    if (count > 0) {
        const newCount = count - 1;
        setCount(newCount);
        removeItem(product);
    }
};


  const handleAddToCart = () => {
    if (count > 0) {
      addItem(product, count); // Solo agrega la cantidad seleccionada
      setCount(0); // Reinicia el contador después de agregar
    }
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Spinner size="xl" />
      </Box>
    );
  }

  if (!product) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <Text fontSize="2xl">Producto no encontrado</Text>
      </Box>
    );
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
            <Text color={priceTextColor} fontWeight={300} fontSize={'2xl'}>
              ${product.price}
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={'column'} divider={<StackDivider borderColor={borderColor} />}>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color={descriptionColor} fontSize={'2xl'} fontWeight={'300'}>
                {product.description}
              </Text>
            </VStack>

            <Box>
              <Text fontSize={{ base: '16px', lg: '18px' }} color={featuresTitleColor} fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
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
              <Text fontSize={{ base: '16px', lg: '18px' }} color={detailsTitleColor} fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
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
            bg={headerBg}
            color={buttonTextColor}
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
