import { useContext } from "react";
import { CartContext } from "../context";

import Card from "../components/Card";
import ProductDetail from "../components/ProductDetail";

function Home() {
  const context = useContext(CartContext);
  const renderView = () => {
    if (context.filteredItems?.length > 0) {
      return context.filteredItems?.map((item) => (
        <Card data={item} key={item.id} />
      ));
    } else {
      return <div>We don't have anything :c</div>;
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search a product"
          className="rounded-lg border border-slate-800/25 w-80 p-2 mb-6 shadow focus:outline-none text-sm font-semibold"
          onChange={(e) => context.setSearchByTitle(e.target.value)}
        />
      </div>

      <div className="grid md:grid-cols-4 sm:grid-cols-2 md:gap-8 sm:gap-4 sm:justify-items-center w-full max-w-screen-lg">
        {renderView()}
      </div>
      <ProductDetail />
    </>
  );
}

export default Home;
