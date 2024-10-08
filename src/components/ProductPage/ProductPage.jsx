import React from 'react';
import CardItemPreview from './CardItemPreview'; 
import { useProductById } from './useProductById'; 
import { Spinner } from '@chakra-ui/react'; 

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
