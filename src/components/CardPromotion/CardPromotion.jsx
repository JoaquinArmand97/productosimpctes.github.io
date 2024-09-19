import React from 'react';
import { Box, Flex, useColorModeValue, Heading, Text, Stack, Image, keyframes, IconButton } from '@chakra-ui/react';
import { ProductsData } from '../data/productData';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const moveLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CardPromotion = () => {
  const filteredProducts = ProductsData.filter(product => product.onSale === true);
  const productList = [...filteredProducts, ...filteredProducts];

  return (
    <Box overflow="hidden" width="100%" p={5} position="relative">
      
      {/* Botón Izquierda */}
      <IconButton
        aria-label="Flecha izquierda"
        icon={<Image src="https://img.icons8.com/?size=100&id=xGtnyCEIrmt1&format=png&color=000000" />} 
        position="absolute"
        top="50%"
        left="0"
        transform="translateY(-50%)"
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        zIndex={2}
      />

      {/* Contenedor del carrusel */}
      <Flex
        animation={`${moveLeft} 40s linear infinite`}
        justify="flex-start"
        align="center"
        gap={6}
        width="200%"
      >
        {productList.map((product, index) => (
          <Box
            key={index}
            role={'group'}
            p={6}
            maxW={'330px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.800')}
            boxShadow={'2xl'}
            rounded={'lg'}
            pos={'relative'}
            zIndex={1}
          >
            <Box
              rounded={'lg'}
              pos={'relative'}
              height={'230px'}
              overflow={'hidden'}
              bg={useColorModeValue('gray.100', 'gray.700')}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              {product.image ? (
                <Image
                  rounded={'lg'}
                  height={'100%'}
                  width={'100%'}
                  objectFit={'cover'}
                  src={product.image}
                  alt={product.name}
                />
              ) : (
                <Text color="gray.500">Imagen no disponible</Text>
              )}
            </Box>
            <Stack pt={10} align={'center'}>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
                {product.name}
              </Heading>
              <Text color={'gray.500'}>{product.description}</Text>
              <Text fontWeight={800} fontSize={'xl'}>
                ${product.price}
              </Text>
            </Stack>
          </Box>
        ))}
      </Flex>

      {/* Botón Derecha */}
      <IconButton
        aria-label="Flecha derecha"
        icon={<Image src="https://img.icons8.com/?size=100&id=xGtnyCEIrmt1&format=png&color=000000" />} 
        position="absolute"
        top="50%"
        right="0"
        transform="translateY(-50%)"
        bg="transparent"
        _hover={{ bg: 'transparent' }}
        zIndex={2}
      />
    </Box>
  );
};

export default CardPromotion;

