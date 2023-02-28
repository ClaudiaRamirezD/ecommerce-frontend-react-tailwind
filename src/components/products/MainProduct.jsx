import React from "react";
import DetailProduct from "@/components/products/DetailProduct";
import SlideProduct from "@/components/products/SlideProduct";

const MainProduct = () => {
  return (
    <main className="grid grid-cols-1 items-center  gap-8 md:mx-auto md:grid-cols-2 md:min-h-[calc(100vh-88px-3px)] md:container">
      <SlideProduct />
      <DetailProduct />
    </main>
  );
};

export default MainProduct;
