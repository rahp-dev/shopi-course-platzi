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

  //Get products by category
  const [searchByCategory, setSearchByCategory] = useState(null);

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

  const filteredItemsByCategory = (items, searchByCategory) => {
    return items?.filter((item) =>
      item.category.name.toLowerCase().includes(searchByCategory.toLowerCase())
    );
  };

  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === "BY_TITLE") {
      return filteredItemsByTitle(items, searchByTitle);
    }
    if (searchType === "BY_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory);
    }
    if (!searchType) {
      return items;
    }
    if (searchType === "BY_TITLE_AND_CATEGORY") {
      return filteredItemsByCategory(items, searchByCategory).filter((item) =>
        item.title.toLowerCase().includes(searchByTitle.toLowerCase())
      );
    }
  };

  useEffect(() => {
    if (searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy(
          "BY_TITLE_AND_CATEGORY",
          items,
          searchByTitle,
          searchByCategory
        )
      );

    if (searchByTitle && !searchByCategory)
      setFilteredItems(
        filterBy("BY_TITLE", items, searchByTitle, searchByCategory)
      );

    if (!searchByTitle && searchByCategory)
      setFilteredItems(
        filterBy("BY_CATEGORY", items, searchByTitle, searchByCategory)
      );

    if (!searchByTitle && !searchByCategory)
      setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory));
  }, [items, searchByTitle, searchByCategory]);

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
        searchByCategory,
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
        setSearchByCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
