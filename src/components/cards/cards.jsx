import { Box, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileScreenButton, faWrench, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const Cards = () => {
  const controls = useAnimation(); // Controlador para la animación
  const [ref, inView] = useInView({ threshold: 0.2 }); // Detecta si el elemento está en vista (20% visible)

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref} // Se conecta con el Intersection Observer
      initial="hidden" // Estado inicial de la animación
      animate={controls} // Controla cuándo debe animarse
      variants={{
        hidden: { opacity: 0, y: 50 }, // Antes de aparecer
        visible: { opacity: 1, y: 0, transition: { duration: 2.8 } }, // Transición de entrada
      }}
    >
      <Box
        
        px={{ base: 4, md: 8, lg: 16, xl: 24 }}
        mx="auto"
        maxWidth={{ base: '100%', md: '80%', lg: '1200px' }}
        py={{ base: 4, md: 8 }}
        my={{ base: 12, md: 14 }}
        width="100%"
        gap={50}
      >
        <SimpleGrid spacing={6} columns={{ base: 1, md: 2, lg: 3 }}>
          <Card align="center">
            <CardHeader>
              <Flex alignItems="center" justifyContent="center" fontSize={50} margin={5}>
                <FontAwesomeIcon icon={faMobileScreenButton} />
              </Flex>
              <Heading size="md" textAlign="center">
                Venta Mayorista
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center">
                Realizamos venta al por mayor. No dudes en pedir tu presupuesto
              </Text>
            </CardBody>
            <CardFooter>
              <Button>
                <Link to="/Contacto">Contactanos</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card align="center">
            <CardHeader>
              <Flex alignItems="center" justifyContent="center" fontSize={50} margin={5}>
                <FontAwesomeIcon icon={faWrench} />
              </Flex>
              <Heading size="md" textAlign="center">
                Reparación Especializada
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center">
                Contamos con un servicio especializado en Apple y en dispositivos Android
              </Text>
            </CardBody>
            <CardFooter>
              <Button>Contactanos</Button>
            </CardFooter>
          </Card>

          <Card align="center">
            <CardHeader>
              <Flex alignItems="center" justifyContent="center" fontSize={50} margin={5}>
                <FontAwesomeIcon icon={faCartShopping} />
              </Flex>
              <Heading size="md" textAlign="center">
                Productos Nuevos
              </Heading>
            </CardHeader>
            <CardBody>
              <Text textAlign="center">
                Contamos con equipos nuevos, con garantía de fábrica.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>
                <Link to="/Productos">Ver aquí</Link>
              </Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Box>
    </motion.div>
  );
};

export default Cards;
