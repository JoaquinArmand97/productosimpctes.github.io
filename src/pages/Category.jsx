import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../components/data/productData";
import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import CardItemPreview from "../components/cardItemPreview/cardItemPreview";

// Función para capitalizar la primera letra de la categoría
const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Category = () => {
  const { category } = useParams();
  const normalizedCategory = category.toLowerCase(); 
  
  // Filtrando los productos según la categoría
  const filteredProducts = ProductsData.filter(product =>
    product.category.toLowerCase() === normalizedCategory
  );

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" my={6}>
        Category: {capitalizeFirstLetter(category)}
      </Heading>

      
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {filteredProducts.length === 0 ? (
          <Box textAlign="center" py={6}>
            <Text fontSize="xl">No products found in this category.</Text>
          </Box>
        ) : (
          filteredProducts.map(product => (
            <CardItemPreview key={product.id} product={product} />
          ))
        )}
      </SimpleGrid>
    </Box>
  );
};

export default Category;
