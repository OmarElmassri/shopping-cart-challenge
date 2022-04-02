import React from "react";
import { Product, products } from "../../assets/const/products";
import TextItem from "../common/text/TextItem";
import ProductCard from "./helpers/productCard";

const Products = () => {
  return (
    <div className="single-grid">
      <TextItem content="products" classes="slabel-hev" />
      <div className="triple-grid">
        {products.map((product: Product) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
