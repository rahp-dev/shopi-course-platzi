import { useContext } from "react";
import { CartContext } from "../../context";
import { Link } from "react-router-dom";

import OrderCard from "../../components/OrderCard";
import { totalPrice } from "../../utils";

import { XMarkIcon } from "@heroicons/react/24/solid";

const CheckoutMenu = () => {
  const context = useContext(CartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id != id
    );
    context.setCardProducts(filteredProducts);
  };

  const handleCheckout = () => {
    const date = new Date();

    const orderToAdd = {
      date: date.toLocaleDateString(),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };

    context.setOrder([...context.order, orderToAdd]);
    context.setCardProducts([]);
    context.closeCheckoutMenu();
  };

  return (
    <aside
      className={`${
        context.isCheckoutMenuOpen ? "flex " : "hidden"
      } flex-col fixed right-0 bg-white border border-gray-200 shadow-2xl rounded-md w-[340px] h-[calc(100vh-68px)] top-[68px]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">My Order</h2>
        <button>
          <XMarkIcon
            className="w-7 h-7 hover:text-red-500 transition-colors duration-200"
            onClick={() => context.closeCheckoutMenu()}
          />
        </button>
      </div>

      <div className="px-6 overflow-y-auto flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            imageUrl={product.images[0]}
            price={product.price}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      <div className="p-6">
        <p className="flex justify-between items-center">
          <span className="font-medium">Total:</span>
          <span className="font-medium">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/my-orders/last">
          <button
            className="w-full bg-slate-700 py-3 rounded-lg text-white mt-5"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default CheckoutMenu;
