import { Menu, MenuButton, MenuList, MenuItemOption, MenuOptionGroup, MenuDivider, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ButtonCategory = () => {
  const navigate = useNavigate();

  const handleCategoryChange = (value) => {
    navigate(`/category/${value}`);
  };

  return (
    <Menu closeOnSelect={false}>
      <MenuButton as={Button} colorScheme="blue" margin={20}>
        Selecciona una categoría
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup title="Categoría" type="radio" onChange={handleCategoryChange}>
          <MenuItemOption value="iphone">IPHONE</MenuItemOption>
          <MenuItemOption value="xiaomi">XIAOMI</MenuItemOption>
          <MenuItemOption value="samsung">SAMSUNG</MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

export default ButtonCategory;
