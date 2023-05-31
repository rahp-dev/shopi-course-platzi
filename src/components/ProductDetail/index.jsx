import { useContext } from "react";
import { CartContext } from "../../context";
import { XMarkIcon } from "@heroicons/react/24/solid";

const ProductDetail = () => {
  const context = useContext(CartContext);
  console.log("Product: ", context.productToShow);

  return (
    <aside
      className={`${
        context.isDetailOpen ? "flex" : "hidden"
      } flex-col fixed right-0 bg-white border border-gray-200 shadow-2xl rounded-md w-[340px] h-[calc(100vh-68px)] top-[68px]`}
    >
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">Details</h2>
        <button>
          <XMarkIcon
            className="w-7 h-7 hover:text-red-500 transition-colors duration-200"
            onClick={() => context.closeProductDetail()}
          />
        </button>
      </div>

      <figure className="p-6">
        <img
          className="w-full h-full rounded-lg shadow-lg"
          src={
            context.productToShow.images ? context.productToShow.images[0] : ""
          }
          alt={context.productToShow.title}
        />
      </figure>
      <p className="flex flex-col px-5">
        <span className="text-lg font-medium">
          {context.productToShow.title}
        </span>
        <span className="font-medium mb-2">${context.productToShow.price}</span>
        <span className="font-light text-justify">
          {context.productToShow.description}
        </span>
      </p>

      <div className="flex justify-between items-center py-4 px-5">
        <p className="font-medium">Category:</p>
        <p className="font-medium">{context.productToShow.category?.name}</p>
      </div>
    </aside>
  );
};

export default ProductDetail;
