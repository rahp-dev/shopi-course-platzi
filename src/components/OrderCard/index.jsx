import { XMarkIcon } from "@heroicons/react/24/solid";

const OrderCard = (props) => {
  const { id, title, imageUrl, price, handleDelete } = props;

  return (
    <div className="flex justify-between items-center mb-3">
      <div className="flex items-center gap-4">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-lg object-cover shadow"
            alt={title}
            src={imageUrl}
          />
        </figure>
        <p className="text-sm font-medium">{title}</p>
      </div>

      <div className="flex items-center gap-2">
        <p className="text-sm font-medium">${price}</p>
        {handleDelete && (
          <XMarkIcon
            onClick={() => handleDelete(id)}
            className="h-5 w-5 text-black cursor-pointer"
          ></XMarkIcon>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
