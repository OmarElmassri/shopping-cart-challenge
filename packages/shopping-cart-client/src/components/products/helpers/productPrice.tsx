import React from "react";
import { Product } from "../../../assets/const/products";
import {
  calculateDiscount,
  numberWithCommas,
} from "../../../utils/helperFunctions";
import TextItem from "../../common/text/TextItem";

interface ProductPriceProps {
  product: Product;
}

const ProductPrice = ({ product }: ProductPriceProps) => {
  return (
    <div className="flex justify-start">
      {product.discount && (
        <TextItem
          content="price"
          params={{ value: numberWithCommas(product.price) }}
          classes="micro-hev text-left end-med-marg text-line text-opacity"
        />
      )}
      <TextItem
        content="price"
        params={{
          value: numberWithCommas(
            product.discount
              ? calculateDiscount(product.price, product.discount)
              : product.price
          ),
        }}
        classes="tiny-hev text-left"
      />
      {product.discount && (
        <TextItem
          content="discount"
          params={{ value: product.discount.toString() }}
          classes="micro-hev text-left start-med-marg second"
        />
      )}
    </div>
  );
};

export default ProductPrice;
