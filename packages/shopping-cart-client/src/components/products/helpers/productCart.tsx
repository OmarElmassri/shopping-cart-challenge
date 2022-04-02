import React from "react";
import { Product } from "../../../assets/const/products";
import NormalButton from "../../common/buttons/normalButton";

interface ProductCartProps {
  product: Product;
}

const ProductCart = ({ product }: ProductCartProps) => {
  return (
    <div className="flex justify-end">
      <NormalButton
        content="add-to-cart"
        onClick={() => console.log("added")}
        radial
      />
    </div>
  );
};

export default ProductCart;
