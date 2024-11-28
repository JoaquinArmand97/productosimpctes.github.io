import PropTypes from 'prop-types';
import { Card as ChakraCard, CardBody, Image, Stack, Box, Heading, Text, Divider, CardFooter, ButtonGroup, Button, SimpleGrid } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Product = ({ products }) => {
  // Manejo de productos vacíos
  if (!products || products.length === 0) {
    return (
      <Box textAlign="center" p={5}>
        <Text fontSize="xl">No hay productos disponibles.</Text>
      </Box>
    );
  }

  return (
    <SimpleGrid 
      columns={{ base: 1, sm: 2, md: 2, lg: 4 }}  
      spacing="30px"  
      p="30px"  
    >
      {products.map((product) => (
        <Box 
          key={product.id} 
          borderWidth="1px" 
          borderRadius="lg" 
          overflow="hidden"  
        >
          <ChakraCard 
            maxW="sm"  
            bg="gray.50" 
            _hover={{ boxShadow: "md", transform: "scale(1.02)" }} 
            transition="all 0.2s ease-in-out"
          >
            <CardBody p="0">
              <Box 
                position="relative"
                overflow="hidden" 
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  borderRadius="lg"
                  objectFit="contain"  
                  h="200px" 
                  w="full"  
                  objectPosition="center" 
                />
              </Box>
              <Stack mt="4" spacing="3" p="4" color={'black'}>
                <Heading size="md">{product.name}</Heading>
                <Text>{product.description}</Text>
                <Text color="blue.600" fontSize="2xl">${product.price}</Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue" size="sm">
                  <Link to={`/productos/${product.id}`}>Ver Detalles</Link>
                </Button>
              </ButtonGroup>
            </CardFooter>
          </ChakraCard>
        </Box>
      ))}
    </SimpleGrid>
  );
};

// Validación de props
Product.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Product;
