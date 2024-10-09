import {
  Box,
  Flex,
  Button,
  useDisclosure,

  useColorMode,

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
      <Box
        position="absolute"  
        top="0"              
        left="0"
        right="0"
        zIndex="10"           
        bg="transparent"      
        px={4}
      >
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to="/">
            <Box
              className='bebas-neue-regular'
              color={'white'}         
              fontFamily="'Bebas Neue', sans-serif"
              fontSize="26px"
            >
              Productos Importados
            </Box>
          </Link>

          <Spacer />

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

          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={onToggle}
            background={'gray.600'}
            color={'white'}
            ml={4}
          />
        </Flex>

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

