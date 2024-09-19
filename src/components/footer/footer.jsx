'use client'

import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import { FaInstagram, FaYoutube } from 'react-icons/fa'
import { FaMeta , FaWhatsapp } from "react-icons/fa6";

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
     
        <Text fontSize={'lg'} fontWeight={'bold'}>
          Productos Importados Corrientes
        </Text>

      
        <Stack direction={{ base: 'column', md: 'row' }} spacing={6}>
          <SocialButton  label={'Meta'} href={'https://www.facebook.com/ProductosImpCtes/'}>
          <FaMeta />
          </SocialButton>
          <SocialButton label={'Whatsapp'} href={'#'}>
            <FaWhatsapp />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'https://www.instagram.com/productosimpctes/'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>

      
      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center'}}
          align={{ base: 'center' }}
        >
          {/* Texto de derechos reservados */}
          <Text textAlign={'center'}>
            © 2024 Productos Importados Corrientes. Todos los derechos reservados.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}

export default Footer
