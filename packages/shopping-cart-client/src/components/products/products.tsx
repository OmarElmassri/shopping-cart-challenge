import React from "react";
// Helpers
import { IProduct } from "shopping-cart-shared";
import { products } from "../../assets/const/products";
// Components
import TextItem from "../common/text/TextItem";
import ProductCard from "./helpers/productCard";

const Products: React.FunctionComponent = () => {
  return (
    <div className="single-grid bottom-extend">
      <div className="noncard-container">
        <TextItem content="products" classes="slabel-hev" />
      </div>
      <div className="triple-grid">
        {products.map((product: IProduct) => {
          return <ProductCard key={product.itemId} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
