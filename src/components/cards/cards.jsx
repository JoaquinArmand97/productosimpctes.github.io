import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Text, Button, Box, Flex } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faMobileScreenButton, faWrench , faCartShopping } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

const Cards = () => {
    return (
        <Box
            px={{ base: 4, md: 8, lg: 16, xl: 24 }}  
            mx="auto"
            maxWidth={{ base: "100%", md: "80%", lg: "1200px" }} 
            py={{ base: 4, md: 8 }}  
            width="100%"  
        >
            <SimpleGrid spacing={6} columns={{ base: 1, md: 2, lg: 3 }}>
               
                <Card align="center">  
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="center" fontSize={50} margin={5}>
                            <FontAwesomeIcon icon={faMobileScreenButton} />
                        </Flex>
                        <Heading size='md' textAlign="center">Venta Mayorista</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text textAlign="center">Realizamos venta al por mayor. No dudes en pedir tu presupuesto</Text>
                    </CardBody>
                    <CardFooter>
                        <Button>Contactanos</Button>
                    </CardFooter>
                </Card>

                
                <Card align="center"> 
                    <CardHeader>
                        <Flex alignItems="center" justifyContent="center" fontSize={50} margin={5}>
                            <FontAwesomeIcon icon={faWrench} />
                        </Flex>
                        <Heading size='md' textAlign="center">Reparación Especializada</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text textAlign="center">Contamos con un servicio especializado en Apple y en dispositivos Android</Text>
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
                        <Heading size='md' textAlign="center">Productos Nuevos</Heading>
                    </CardHeader>
                    <CardBody>
                        <Text textAlign="center">Contamos con equipos nuevos, con garantía de fábrica.</Text>
                    </CardBody>
                    <CardFooter>
                        <Button><Link to="/Productos">Ver aquí</Link></Button>
                    </CardFooter>
                </Card>
            </SimpleGrid>
        </Box>
    );
}

export default Cards;
