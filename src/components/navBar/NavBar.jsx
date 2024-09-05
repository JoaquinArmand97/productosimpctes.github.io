import {
  Box,
  Flex,
  Avatar,
  Text,
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
} from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import Cardwidget from '../Cardwidget/Cardwidget'



const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} background={'#1A202C'}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box color={'white'} fontFamily="'Roboto', sans-serif">Productos Importados</Box>

          <Flex alignItems={'center'}>
            <HStack spacing={8}>
              <Button variant="link" colorScheme="teal" href="#productos">
                Productos
              </Button>
              <Button variant="link" colorScheme="teal" href="#contacto">
                Contacto
              </Button>
              <Cardwidget />
              <Button onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    src={'https://prenteria.com/wp-content/uploads/2023/12/avatar-IA.webp'}
                  />
                </MenuButton>
                <MenuList alignItems={'center'}>
                  <br />
                  <Center>
                    <Avatar
                      size={'2xl'}
                      src={'https://prenteria.com/wp-content/uploads/2023/12/avatar-IA.webp'}
                    />
                  </Center>
                  <br />
                  <Center>
                    <p>Joaquin</p>
                  </Center>
                  <br />
                  <MenuDivider />
                  <MenuItem>Ingresar</MenuItem>
                  <MenuItem>Configuraciones</MenuItem>
                  <MenuItem>Ayuda</MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Flex>
      </Box>
    </>
  )
}

export default NavBar
