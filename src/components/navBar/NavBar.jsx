import {
  Box,
  Flex,
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  HStack,
  IconButton,
  VStack,
  Collapse,
  Spacer,
} from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Cardwidget from '../Cardwidget/Cardwidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} background={'#1A202C'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          {/* Logo */}
          <Link to="/">
            <Box color={'white'} fontFamily="'Roboto', sans-serif">
              Productos Importados
            </Box>
          </Link>

          {}
          <Spacer />

          {}
          <HStack
            spacing={8}
            alignItems={'center'}
            display={{ base: 'none', md: 'flex' }}
            ml={{ base: '0', md: '20px' }} 
          >
            <Link to="/Productos" style={{ color: 'white' }}>
              Productos
            </Link>
            <Link to="/contacto" style={{ color: 'white' }}>
              Contacto
            </Link>
            <Cardwidget />
            <Button onClick={toggleColorMode} colorScheme={'gray'}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </HStack>

        

          {}
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={onToggle}
            background={'gray.600'}
            color={'white'}
            ml={4} //
          />
        </Flex>

        {/* Links colapsables para pantallas pequeñas */}
        <Collapse in={isOpen} animateOpacity>
          <Box pb={4} display={{ md: 'none' }}>
            <VStack as={'nav'} spacing={4}>
              <Link to="/Productos" style={{ color: 'white' }}>
                Productos
              </Link>
              <Link to="/contacto" style={{ color: 'white' }}>
                Contacto
              </Link>
              <Cardwidget />
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </VStack>
          </Box>
        </Collapse>
      </Box>
    </>
  )
}

export default NavBar

