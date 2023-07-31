import { useContext } from "react";
import { CartContext } from "../../context";

import { CheckIcon, PlusIcon } from "@heroicons/react/24/solid";

import { Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Card = (data) => {
  const context = useContext(CartContext);

  const showProduct = (productDetail) => {
    context.openProductDetail();
    context.setProductToShow(productDetail);
  };

  const addProductsToCart = (event, productData) => {
    event.stopPropagation();

    context.setCardProducts((cartProducts) => [...cartProducts, productData]);
    context.setCount(context.count + 1);

    context.closeProductDetail();
    context.openCheckoutMenu();

    toast.success(`${data.data?.title} agregado al carrito.`, {
      bodyClassName: "text-sm font-medium text-black",
      transition: Slide,
    });
  };

  const renderIcon = (id) => {
    const isInCart =
      context.cartProducts.filter((product) => product.id === id).length > 0;

    if (isInCart) {
      return (
        <button className="absolute top-0 right-0 flex justify-center items-center bg-slate-800 w-6 h-6 m-2 text-sm rounded-full shadow-lg">
          <CheckIcon className="w-6 h-6 text-cyan-500" />
        </button>
      );
    } else {
      return (
        <button
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 m-2 text-sm rounded-full shadow-lg"
          onClick={(e) => addProductsToCart(e, data.data)}
        >
          <PlusIcon className="w-6 h-6 hover:text-green-700 transition-colors duration-300" />
        </button>
      );
    }
  };

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProduct(data.data)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/95 rounded-lg text-black font-medium text-xs m-2 px-2 py-0.5 shadow-lg">
          {data.data?.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data?.images[0]}
          alt={data.data?.title}
        />

        {renderIcon(data.data?.id)}
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-medium">{data.data?.title}</span>
        <span className="text-base font-medium">{data.data?.price}$</span>
      </p>
    </div>
  );
};

export default Card;
