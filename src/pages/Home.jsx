import { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";

function Home() {
  const [items, setItems] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="grid grid-cols-4 gap-8 w-full max-w-screen-lg">
      {items?.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

export default Home;
