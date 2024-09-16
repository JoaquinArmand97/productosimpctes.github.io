import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Categoría seleccionada: {category}</h1>
      
    </div>
  );
};

export default Category;
