import { Select } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const ButtonCategory = () => {
  const navigate = useNavigate();

  const handleCategoryChange = (event) => {
    const selectedCategory = event.target.value;
    navigate(`/category/${selectedCategory}`);  
  };

  return (
    <Select placeholder="Selecciona una categoría" onChange={handleCategoryChange}>
      <option value="iphone">IPHONE</option> 
      <option value="xiaomi">XIAOMI</option>
      <option value="samsung">SAMSUNG</option>
    </Select>
  );
};

export default ButtonCategory;
