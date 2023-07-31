import { useContext } from "react";
import { CartContext } from "../../context";

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

      <div className="px-6 overflow-y-auto">
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

      <div className="px-6">
        <p className="flex justify-between items-center">
          <span className="font-medium">Total:</span>
          <span className="font-medium">
            ${totalPrice(context.cartProducts)}
          </span>
        </p>
      </div>
    </aside>
  );
};

export default CheckoutMenu;
