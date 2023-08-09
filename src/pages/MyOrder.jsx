import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";

import OrderCard from "../components/OrderCard";

function MyOrder() {
  const context = useContext(CartContext);
  const currentPath = window.location.pathname;
  let index = currentPath.substring(currentPath.lastIndexOf("/") + 1);
  if (index === "last") index = context.order?.length - 1;

  return (
    <>
      <div className="flex items-center justify-center w-80 relative mb-8">
        <Link to="/my-orders" className="absolute left-0">
          <ChevronLeftIcon className="h-6 w-6 text-slate-800 cursor-pointer" />
        </Link>
        <h2 className="font-semibold">My Order</h2>
      </div>

      <div className="flex flex-col w-96">
        {context.order?.[index]?.products.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
          />
        ))}
      </div>
    </>
  );
}

export default MyOrder;
