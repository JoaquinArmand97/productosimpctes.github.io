import { useContext, useState } from 'react';
import { CartContext } from '../components/context/CartContext';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Text,
  VStack,
  Heading,
  useColorModeValue,
  Divider,
  HStack,
} from '@chakra-ui/react';

const Checkout = () => {
  const { cartState, totalPrice } = useContext(CartContext); // Cambié cart por cartState
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setOrderConfirmed(true);
      setIsSubmitting(false);
    }, 2000);
  };

  const textColor = useColorModeValue('gray.900', 'gray.400');
  const headerBg = useColorModeValue('gray.900', 'gray.50');
  const buttonTextColor = useColorModeValue('white', 'gray.900');

  if (orderConfirmed) {
    return (
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mb={6}>
          ¡Pedido confirmado!
        </Heading>
        <Text fontSize="lg" color={textColor}>
          Gracias por tu compra. Recibirás un correo con los detalles de tu pedido.
        </Text>
      </Box>
    );
  }

  // Verifica si el carrito está vacío
  if (!cartState || cartState.length === 0) { // Cambié cart por cartState
    return (
      <Box textAlign="center" py={10} px={6}>
        <Heading as="h2" size="xl" mb={6}>
          El carrito está vacío
        </Heading>
        <Text fontSize="lg">Agrega productos para continuar.</Text>
      </Box>
    );
  }

  return (
    
    <Box maxW="container.md" mx="auto" py={8} px={4}>
    
      <Heading as="h1" size="xl" mb={6}>
        Checkout
      </Heading>

      {/* Detalles del carrito */}
      <VStack align="stretch" spacing={4} mb={6}>
        {cartState.map((item) => ( // Cambié cart por cartState
          <Box key={item.id} p={4} borderWidth={1} borderRadius="lg">
            <HStack justify="space-between">
              <Text fontSize="lg" fontWeight="bold">
                {item.name}
              </Text>
              <Text fontSize="lg">${item.price} x {item.qtyItem}</Text> {/* Cambié quantity por qtyItem */}
            </HStack>
            <Text fontSize="md" color="gray.500">
              Total: ${item.price * item.qtyItem} {/* Cambié quantity por qtyItem */}
            </Text>
          </Box>
        ))}
        <Divider />
        <HStack justify="space-between" p={4}>
          <Text fontSize="lg" fontWeight="bold">
            Precio total:
          </Text>
          <Text fontSize="lg">${totalPrice()}</Text>
        </HStack>
      </VStack>

      {/* Formulario de Checkout */}
      <form onSubmit={handleOrderSubmit}>
        <Stack spacing={4}>
          <FormControl id="name" isRequired>
            <FormLabel>Nombre completo</FormLabel>
            <Input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ingresa tu nombre"
            />
          </FormControl>

          <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingresa tu email"
            />
          </FormControl>

          <FormControl id="address" isRequired>
            <FormLabel>Dirección de envío</FormLabel>
            <Input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="Ingresa tu dirección"
            />
          </FormControl>

         
          <Button
            type="submit"
            size="lg"
            w="full"
            bg={headerBg}
            color={buttonTextColor}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}
            isLoading={isSubmitting}
          >
            Procesar pago
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default Checkout;
