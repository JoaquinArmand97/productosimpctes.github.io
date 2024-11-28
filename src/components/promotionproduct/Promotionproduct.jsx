'use client';

import React, { useEffect, useState } from 'react';
import {
  Flex,
  Circle,
  Box,
  Image,
  Badge,
  useColorModeValue,
  Icon,
  chakra,
  Tooltip,
} from '@chakra-ui/react';
import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { FiShoppingCart } from 'react-icons/fi';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { Link } from 'react-router-dom'; // Importa Link de React Router
import { db } from '../firebase/firebaseConfig';
import { motion } from 'framer-motion'; // Importamos framer-motion

function Rating({ rating, numReviews }) {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: '1' }}
                color={i < rating ? 'teal.500' : 'gray.300'}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: '1' }} />;
          }
          return <BsStar key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
}

function Promotionproduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const q = query(
          collection(db, 'products'),
          where('promotion', '==', true)
        );

        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) => {
          const data = doc.data();
          return {
            id: doc.id,
            ...data,
            price: Number(data.price),
          };
        });
        setProducts(productsData);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Flex wrap="wrap" justifyContent="center" gap={6} p={6}>
      {products.map((product) => (
        <Link to={`/productos/${product.id}`} key={product.id}>
          <motion.div
            initial={{ x: '100%' }} // Inicialmente fuera de la pantalla a la derecha
            animate={{ x: '-100%' }} // Mover la card fuera de la pantalla hacia la izquierda
            transition={{
              x: {
                repeat: Infinity, // Hace que la animación se repita infinitamente
                repeatType: 'loop', // Asegura que se repita en un bucle
                duration: 5, // Duración de la animación
                ease: 'easeInOut', // Tipo de animación
              },
            }}
          >
            <Box
              bg={useColorModeValue('white', 'gray.800')}
              maxW="xs" // Tamaño más pequeño de las cards
              borderWidth="1px"
              rounded="md"
              shadow="lg"
              position="relative"
              cursor="pointer" // Cambia el cursor al pasar sobre la tarjeta
            >
              {product.isNew && (
                <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
              )}

              <Image
                src={product.image}
                alt={`Picture of ${product.name}`}
                roundedTop="lg"
              />

              <Box p="6">
                <Box display="flex" alignItems="baseline">
                  {product.isNew && (
                    <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                      New
                    </Badge>
                  )}
                </Box>
                <Flex mt="1" justifyContent="space-between" alignContent="center">
                  <Box
                    fontSize="2xl"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    isTruncated
                  >
                    {product.name}
                  </Box>
                  <Tooltip
                    label="Add to cart"
                    bg="white"
                    placement={'top'}
                    color={'gray.800'}
                    fontSize={'1.2em'}
                  >
                    <chakra.a href={'#'} display={'flex'}>
                      <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
                    </chakra.a>
                  </Tooltip>
                </Flex>

                <Flex justifyContent="space-between" alignContent="center">
                  <Rating rating={product.rating} numReviews={product.numReviews} />
                  <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                    <Box as="span" color={'gray.600'} fontSize="lg">
                      £
                    </Box>
                    {typeof product.price === 'number'
                      ? product.price.toFixed(2)
                      : 'N/A'}
                  </Box>
                </Flex>
              </Box>
            </Box>
          </motion.div>
        </Link>
      ))}
    </Flex>
  );
}

export default Promotionproduct;