import { keyframes } from '@emotion/react';
import { Box, Flex, useColorModeValue, Heading, Text, Stack, Image } from '@chakra-ui/react';
import { ProductsData } from '../data/productData';

const moveLeft = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CardPromotion = () => {
  const bgColor = useColorModeValue('white', 'gray.800');
  const imgBgColor = useColorModeValue('gray.100', 'gray.700');

  const filteredProducts = ProductsData.filter(product => product.onSale === true);
  const productList = [...filteredProducts, ...filteredProducts];

  return (
    <Box overflow="hidden" width="100%" p={5} position="relative">
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
            bg={bgColor}
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
              bg={imgBgColor}
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
    </Box>
  );
};

export default CardPromotion;
