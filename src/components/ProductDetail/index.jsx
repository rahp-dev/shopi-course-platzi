const ProductDetail = () => {
  return (
    <aside className="flex flex-col fixed right-0 bg-white border border-black shadow rounded-md w-[360px] h-[calc(100vh-68px)] top-[68px]">
      <div className="flex justify-between items-center p-6">
        <h2 className="font-medium text-lg">Details</h2>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 hover:stroke-red-600 transition-colors duration-300"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
