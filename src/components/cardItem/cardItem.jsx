'use client';

import { useParams } from 'react-router-dom';
import { useProductById } from '../hooks/useProductById';
import {
  Box,
  chakra,
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
import { MdLocalShipping } from 'react-icons/md';

const ProductCard = () => {
  const { id } = useParams(); // Obtener el ID del producto desde la URL
  const { product, loading } = useProductById(id); // Usar hook personalizado

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
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'Imagen del producto'}
            src={product.image}
            objectFit={'contain'}  // Cambiado de 'cover' a 'contain' para evitar recortes
            objectPosition={'center'} // Centrar la imagen
            w={'100%'}
            h={{ base: '100%', sm: '350px', lg: '450px' }} // Reducir la altura para que no se vea tan grande
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {product.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              ${product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}>
                {product.description}
              </Text>
              <Text fontSize={'lg'}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aliquid amet
                at delectus doloribus dolorum expedita hic, ipsum maxime modi nam officiis
                porro, quae, quisquam quos reprehenderit velit? Natus, totam.
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
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
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Detalles del Producto
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Material:
                  </Text>{' '}
                  {product.material}
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Color:
                  </Text>{' '}
                  {product.color}
                </ListItem>
              </List>
            </Box>
          </Stack>

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
            }}>
            Agregar al carrito
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>Entrega en 2-3 días hábiles</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default ProductCard;
