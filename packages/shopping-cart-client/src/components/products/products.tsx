import React from "react";
// Helpers
import { IProduct } from "shopping-cart-shared";
import { products } from "../../assets/const/products";
import { useCart } from "../../context/cartContext";
// Components
import TextItem from "../common/text/TextItem";
import ProductCard from "./helpers/productCard";
import ProductSkeleton from "./helpers/productLoader";

const Products: React.FunctionComponent = () => {
  // Context
  const { loading } = useCart();

  return (
    <div className="single-grid">
      <TextItem content="products" classes="slabel-hev" />
      <div className="triple-grid">
        {products.map((product: IProduct) => {
          if (loading) return <ProductSkeleton key={product.itemId} />;
          return <ProductCard key={product.itemId} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
