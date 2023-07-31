import { XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(price);

  const handleOnChange = (e) => {
    setQuantity(e.target.value);
    setTotal(price * e.target.value);
  };

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center mr-4">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover shadow"
            alt={title}
            src={imageUrl}
          />
        </figure>
      </div>

      <div className="flex flex-col">
        <p className="text-sm font-medium">{title}</p>
        <label htmlFor="quantity" className="text-sm">
          Qty:
        </label>
        <input
          className="w-1/2 outline outline-1 outline-offset-2 outline-transparent	rounded-sm text-sm shadow-sm bg-slate-200 mt-2"
          type="number"
          name="quantity"
          value={quantity}
          onChange={(e) => handleOnChange(e)}
        />
      </div>

      <div className="flex items-center gap-1">
        <p className="font-medium">${total}</p>
        <XMarkIcon
          onClick={() => handleDelete(id)}
          className="h-5 w-5 text-black cursor-pointer"
        ></XMarkIcon>
      </div>
    </div>
  );
};

export default OrderCard;
