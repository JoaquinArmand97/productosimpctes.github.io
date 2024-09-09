import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Box, Flex, Center } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faMobileScreenButton, faWrench , faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <Box
            px={24}
            mx="auto"
            maxWidth="1200px"
            py={8}
            width="80%" 
            padding={14}
        >
            {/* SimpleGrid debe encerrar todas las tarjetas */}
            <SimpleGrid spacing={25} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
                {/* Primera tarjeta */}
                <Card>
                    
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="center" fontSize={50} margin={5}>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </Flex>
                        <Heading size='md'>Venta Mayorista</Heading>
                    
                         </CardHeader>
                        
                    <CardBody>
                        <Text>Realizamos venta al por mayor. No dudes en pedir tu presupuesto</Text>
                    </CardBody>
                
                    <CardFooter>
                        <Button>Contactanos</Button>
                    </CardFooter>
                    
                </Card>

                {/* Segunda tarjeta */}
                <Card>
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="center" fontSize={50} margin={5}>
                            <FontAwesomeIcon icon={faWrench} />  {/* Usa el icono importado correctamente */}
                        </Flex>
                        <Heading size='md'>Reparación Especializada</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Contamos con un servicio especializado en Apple y en dispositivos Android</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>Contactanos</Button>
                    </CardFooter>
                </Card>

                {/* Tercera tarjeta */}
                <Card>
                    <CardHeader>
                    <Flex alignItems="center" justifyContent="center" fontSize={50} margin={5}>
                    <FontAwesomeIcon icon={faCartShopping} /> {/* Usa el icono importado correctamente */}
                        </Flex>
                        <Heading size='md'>Productos Nuevos</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text>Contamos con equipos nuevos, con garantía de fábrica.</Text>
                    </CardBody>
                    <CardFooter>
                     <Button> <Link to="/Productos"> Ver aquí </Link> </Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    );
}

export default Cards;

