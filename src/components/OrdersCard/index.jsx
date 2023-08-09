import { ChevronRightIcon } from "@heroicons/react/24/solid";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center border border-slate-800 p-4 w-80 rounded-md mb-4 shadow-md">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span>08.08.23</span>
          <span>{totalProducts} articles</span>
        </p>

        <p className="flex items-center gap-2">
          <span className="font-medium text-md">${totalPrice}</span>
          <ChevronRightIcon className="h-6 w-6 text-slate-800 cursor-pointer" />
        </p>
      </div>
    </div>
  );
};

export default OrdersCard;
