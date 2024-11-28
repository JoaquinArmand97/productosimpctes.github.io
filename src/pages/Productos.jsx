import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../components/firebase/firebaseConfig'; 
import Product from '../components/Product/Product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/sidebar/Sidebar';
import { Box, Flex } from '@chakra-ui/react'; // Importamos componentes de Chakra UI

export const Productos = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  const fetchProducts = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productsData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productsData);
    } catch (error) {
      console.error("Error al obtener productos: ", error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Flex minH="100vh">
      {/* Sidebar a la izquierda */}
      <Box 
        as="aside" 
        w={{ base: "full", md: "240px" }} 
        bg="gray.800" 
        color="white"
        pos="fixed"
        h="100vh"
        zIndex="1"
      >
        <Sidebar />
      </Box>

      {/* Sección de productos a la derecha */}
      <Box 
        as="main" 
        ml={{ base: 0, md: "240px" }} 
        flex="1" 
        p="4" 
        bg="gray.100" 
      >
        {loading ? (
          <Flex justify="center" align="center" height="30vh">
            <FontAwesomeIcon 
              icon={faMobileAlt} 
              size="6x" 
              spin 
              color="gray" 
            />
          </Flex>
        ) : (
          <Product products={products} /> 
        )}
      </Box>
    </Flex>
  );
};
