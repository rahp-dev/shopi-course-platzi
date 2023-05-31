import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Shopping Cart - Add products to cart
  const [cartProducts, setCardProducts] = useState([]);

  // Product Detail - Open or non-open Observation
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Product Detail - Open/Close
  const openProductDetail = () => setIsDetailOpen(true);
  const closeProductDetail = () => setIsDetailOpen(false);

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({});

  return (
    <CartContext.Provider
      value={{
        count,
        isDetailOpen,
        productToShow,
        cartProducts,
        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        setCardProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
