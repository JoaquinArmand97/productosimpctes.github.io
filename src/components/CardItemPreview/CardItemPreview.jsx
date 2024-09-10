import React from 'react';
import { Box, Image, Text, Button } from '@chakra-ui/react';

const CardItemPreview = ({ product }) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image src={product.image} alt={product.name} />
      <Box p="6">
        <Text fontWeight="bold" fontSize="lg">{product.name}</Text>
        <Text mt="2">{product.description}</Text>
        <Text mt="2" fontWeight="bold">${product.price}</Text>
        <Button mt="4" colorScheme="teal">Comprar</Button>
      </Box>
    </Box>
  );
};

export default CardItemPreview;
