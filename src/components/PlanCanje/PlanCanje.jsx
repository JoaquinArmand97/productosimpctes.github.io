import React from 'react';
import { Box, Text, Image } from '@chakra-ui/react';
import planCanje from '../assets/plancanje.png';
import plancanjeimg11 from '../assets/plancanjeimg11.png'; 
import plancanjeimg12 from '../assets/plancanjeimg12.png'; 
import 'animate.css';

export const PlanCanje = () => {
  return (
    <Box
      w='100%'
      h='250px'
      bgGradient="linear(to-r, #0D1B2A, #1B2A38, #1F3A5A, #3B4C63)"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mx="auto"
      my={4}
      position="relative"
    >
      <Image
        src={plancanjeimg12}
        alt="Iphone1"
        position="absolute"
        left="0"
        top="15%"
        transform="translateY(-50%)"
        boxSize="200px" 
        className="animate__animated animate__fadeInRight"
      />
      <Box textAlign="center">
        <Text
          className='animate__flipInY'
          fontFamily='"Oswald", sans-serif'
          as="h1"
          fontSize="80"
          color="white"
          mb={2}
         
        >
          PLAN CANJE
        </Text>
        <Text
          className='animate__flipInY'
          as="h2"
          fontSize="40"
          color="white"
          fontFamily='"Oswald", sans-serif'
        >
          Entregá tu usado y te cotizamos el valor de uno nuevo
        </Text>
      </Box>
      <Image
        src={plancanjeimg11}
        alt="Iphone2"
        position="absolute"
        right="0"
        top="0%"
        transform="translateY(-50%)"
        boxSize="270px" 
        className="animate__animated animate__fadeInRight"
      />
    </Box>
  );
};

export default PlanCanje;

