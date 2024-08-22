import React from 'react';
import { Card as ChakraCard, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';


const Card = () => {
  return (
    <Box ml="40px">
    <ChakraCard maxW='xs'>
      <CardBody>
        <Image
          src='https://cdn-ipoint.waugi.com.ar/26705-large_default/iphone-15-pro-max-256gb.jpg'
          alt='Green double couch with wooden legs'
          borderRadius='lg'
        />
        <Stack mt='6' spacing='3'>
          <Heading size='md'>Iphone 15 Pro Max</Heading>
          <Text>
          Pantalla Super Retina XDR. <br />
          Pantalla OLED de 6,7 pulgadas (17 cm) en diagonal. <br />
          Resolución de 2.796 por 1.290 píxeles a 460 p/p. <br />
          Dynamic Island. <br />
          Pantalla siempre activa.
          Tecnología ProMotion con frecuencia de actualización adaptativa de hasta 120 Hz.
          Pantalla HDR.
          True Tone.
          </Text>
          <Text color='blue.600' fontSize='2xl'>
            $1200
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing='2'>
          <Button variant='solid' colorScheme='blue'>
            Comprar
          </Button>
          <Button variant='ghost' colorScheme='blue'>
            Añadir al carro
          </Button>
        </ButtonGroup>
      </CardFooter>
    </ChakraCard>
    </Box>
  );
};


export default Card;
