const Card = (data) => {
  return (
    <div className="bg-white cursor-pointer w-56 h-60 rounded-lg">
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/75 rounded-lg text-black text-xs m-2 px-2 py-0.5">
          {data.data?.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={data.data?.images[0]}
          alt={data.data?.title}
        />
        <button className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2">
          ➕
        </button>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-medium">{data.data?.title}</span>
        <span className="text-base font-medium">{data.data?.price}$</span>
      </p>
    </div>
  );
};

export default Card;