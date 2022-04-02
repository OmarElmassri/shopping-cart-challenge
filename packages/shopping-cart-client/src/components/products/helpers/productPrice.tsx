import React from "react";
// Helpers
import {
  calculateDiscount,
  numberWithCommas,
} from "../../../utils/helperFunctions";
import { ProductCardProps } from "../../common/interfaces";
// Components
import TextItem from "../../common/text/TextItem";

const ProductPrice: React.FunctionComponent<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
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
