import React from 'react';
import CardItemPreview from './CardItemPreview'; // Importa tu componente
import { useProductById } from './useProductById'; // Importa tu hook
import { Spinner } from '@chakra-ui/react'; // Un spinner para mostrar mientras carga

const ProductPage = ({ productId, db }) => {
  const { product, loading } = useProductById(productId, db); 

  if (loading) {
    return <Spinner />; 
  }

  return (
    <div>
      {product && <CardItemPreview product={product} />} {}
    </div>
  );
};

export default ProductPage;
