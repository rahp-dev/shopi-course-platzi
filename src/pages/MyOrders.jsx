import { useContext } from "react";
import { Link } from "react-router-dom";

import OrdersCard from "../components/OrdersCard";
import { CartContext } from "../context";

function MyOrders() {
  const context = useContext(CartContext);

  return (
    <>
      <div className="flex items-center justify-center w-80 relative mb-8">
        <h2 className="font-semibold">My Orders</h2>
      </div>

      <div>
        {context.order.map((order, index) => (
          <Link key={index} to={`/my-orders/${index}`}>
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MyOrders;
