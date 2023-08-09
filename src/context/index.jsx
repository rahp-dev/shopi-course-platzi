import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Shopping Cart - Increment quantity
  const [count, setCount] = useState(0);

  // Shopping Cart - Add products to cart
  const [cartProducts, setCardProducts] = useState([]);

  // Shopping Cart - Order
  const [order, setOrder] = useState([]);

  // Product Detail - Open or non-open Observation
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  // Product Detail - Open/Close
  const openProductDetail = () => setIsDetailOpen(true);
  const closeProductDetail = () => setIsDetailOpen(false);

  // Product Detail - Show Product
  const [productToShow, setProductToShow] = useState({});

  // Checkout Menu - Open or non-open Observation
  const [isCheckoutMenuOpen, setIsCheckoutMenuOpen] = useState(false);

  // Checkout Menu - Open/Close
  const openCheckoutMenu = () => setIsCheckoutMenuOpen(true);
  const closeCheckoutMenu = () => setIsCheckoutMenuOpen(false);

  // Get products
  const [items, setItems] = useState(null);
  const [filteredItems, setFilteredItems] = useState(null);

  //Get products by title
  const [searchByTitle, setSearchByTitle] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredItemsByTitle = (items, searchByTitle) => {
    return items?.filter((item) =>
      item.title.toLowerCase().includes(searchByTitle.toLowerCase())
    );
  };

  useEffect(() => {
    if (searchByTitle)
      setFilteredItems(filteredItemsByTitle(items, searchByTitle));
  }, [items, searchByTitle]);

  return (
    <CartContext.Provider
      value={{
        count,
        isDetailOpen,
        isCheckoutMenuOpen,
        productToShow,
        cartProducts,
        order,
        items,
        searchByTitle,
        filteredItems,
        setCount,
        openProductDetail,
        closeProductDetail,
        setProductToShow,
        setCardProducts,
        setIsCheckoutMenuOpen,
        openCheckoutMenu,
        closeCheckoutMenu,
        setOrder,
        setItems,
        setSearchByTitle,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
