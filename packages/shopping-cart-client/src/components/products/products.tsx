import React from "react";
// Helpers
import { IProduct } from "shopping-cart-shared";
import { products } from "../../assets/const/products";
// Components
import TextItem from "../common/text/TextItem";
import ProductCard from "./helpers/productCard";

const Products: React.FunctionComponent = () => {
  return (
    <div className="single-grid">
      <TextItem content="products" classes="slabel-hev" />
      <div className="triple-grid">
        {products.map((product: IProduct) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
