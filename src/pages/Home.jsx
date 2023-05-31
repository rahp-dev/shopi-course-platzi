import { useState, useEffect } from "react";
import { HashLoader } from "react-spinners";
import axios from "axios";

import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";

function Home() {
  const [items, setItems] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <HashLoader size={80} color={"#2E4053"} loading={isLoading} />
      <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-8 sm:gap-4 sm:justify-items-center w-full max-w-screen-lg">
        {!isLoading && items?.map((item) => <Card data={item} key={item.id} />)}
      </div>
      <ProductDetail />
    </>
  );
}

export default Home;
