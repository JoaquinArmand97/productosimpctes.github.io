import { useParams } from 'react-router-dom';

const Category = () => {
  const { category } = useParams();

  return (
    <div>
      <h1>Categoría seleccionada: {category}</h1>
      {/* Aquí puedes mostrar productos filtrados por categoría */}
    </div>
  );
};

export default Category;
