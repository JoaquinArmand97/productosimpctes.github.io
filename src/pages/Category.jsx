import React from "react";
import { useParams } from "react-router-dom";
import { ProductsData } from "../components/data/productData";
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import CardItemPreview from "../components/cardItemPreview/cardItemPreview";

const Category = () => {
  const { category } = useParams();
  const normalizedCategory = category.toLowerCase(); 
  const filteredProducts = ProductsData.filter(product =>
    product.category.toLowerCase() === normalizedCategory 
  );

  return (
    <Box>
      <Heading as="h2" size="xl" textAlign="center" my={6}>
        Category: {category}
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {filteredProducts.length === 0 ? (
          <Box textAlign="center" py={6}>No products found in this category</Box>
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
