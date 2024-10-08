import React, { useEffect, useState } from 'react';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../components/firebase/firebaseConfig'; 
import Product from '../components/Product/Product';
import ButtonCategory from '../components/buttonCategory/ButtonCategory';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

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
    <div>
      <ButtonCategory />
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '30vh' }}>
          <FontAwesomeIcon 
            icon={faMobileAlt} 
            size="6x" 
            spin 
            color="white" 
          />
        </div>
      ) : (
        <Product products={products} /> 
      )}
    </div>
  );
};
