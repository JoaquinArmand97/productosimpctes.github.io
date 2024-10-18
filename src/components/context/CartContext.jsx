import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartState, setCartState] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartState));
  }, [cartState]);

  const addItem = (product) => {
    const existingProduct = cartState.find((item) => item.id === product.id);

    if (existingProduct) {
      setCartState(
        cartState.map((item) =>
          item.id === product.id
            ? { ...item, qtyItem: item.qtyItem + 1 }
            : item
        )
      );
    } else {
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

  const deleteItem = (product) => {
    setCartState((prevCartState) =>
      prevCartState.filter((item) => item.id !== product.id)
    );
  };
  

  // Calcular el precio total
  const totalPrice = () => {
    return cartState.reduce((acc, item) => acc + item.price * item.qtyItem, 0);
  };

  // Calcular el total de productos en el carrito
  const totalItems = () => {
    return cartState.reduce((acc, item) => acc + item.qtyItem, 0);
  };

  const valuesToShare = {
    cartState,
    addItem,
    removeItem,
    deleteItem,
    totalPrice,
    totalItems,
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
