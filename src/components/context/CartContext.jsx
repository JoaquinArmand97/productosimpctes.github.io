import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Asegúrate de importar PropTypes

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState([]);


  const addItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id);
  
    if (existingProduct) {
      // Si el producto ya está en el carrito, actualizamos la cantidad, sumando solo la diferencia
      setCartState(
        cartState.map((item) =>
          item.id === product.id
            ? { ...item, qtyItem: item.qtyItem + 1 } // Aquí solo sumamos 1 a la cantidad existente
            : item
        )
      );
    } else {
      // Si el producto no está en el carrito, lo agregamos
      setCartState([...cartState, { ...product, qtyItem: 1 }]);
    }
  };

  
  
  const removeItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id);

    if (existingProduct) {
      if (existingProduct.qtyItem === 1) {
       
        setCartState((prevCartState) =>
          prevCartState.filter((item) => item.id !== product.id)
        );
      } else {
       
        setCartState((prevCartState) =>
          prevCartState.map((item) =>
            item.id === product.id
              ? { ...item, qtyItem: item.qtyItem - 1 }
              : item
          )
        );
      }
    }
  };

  // Función para eliminar completamente un producto del carrito
  const deleteItem = (product) => {
    setCartState((prevCartState) =>
      prevCartState.filter((item) => item.id !== product.id)
    );
  };

  // Valores que serán compartidos a través del contexto
  const valuesToShare = {
    cartState,
    addItem,
    removeItem,
    deleteItem,
  };

  return (
    <CartContext.Provider value={valuesToShare}>
      {children}
    </CartContext.Provider>
  );
};


CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CartProvider;
