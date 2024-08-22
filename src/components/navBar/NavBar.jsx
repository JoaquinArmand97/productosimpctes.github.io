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
  } from '@chakra-ui/react'
  import { MoonIcon, SunIcon } from '@chakra-ui/icons'
  import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
  import Cardwidget from '../Cardwidget/Cardwidget';
  


const NavBar = () => {

    const { colorMode, toggleColorMode } = useColorMode()


    return  <>
    <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <Box>Productos Importados</Box>

        <Flex alignItems={'center'}>
          <Stack direction={'row'} spacing={7}>
            <Cardwidget/>
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
          </Stack>
        </Flex>
      </Flex>
    </Box>
  </>
};

export default NavBar;