import React from "react";
// Helpers
import { ProductCardProps, Resize, Shape } from "../../../utils/interfaces";
// Components
import ImageComponent from "../../common/image/image";
import PriceComponent from "../../common/price/price";
import TextItem from "../../common/text/TextItem";
import ProductCart from "./productCart";

const ProductCard: React.FunctionComponent<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  return (
    <div key={product.itemId} className="card">
      <div className="full-width" style={{ height: 200 }}>
        <ImageComponent
          image={product.imageUrl}
          shape={Shape.square}
          fill
          resize={Resize.contain}
          preview
        />
      </div>
      <div className="all-med-padd single-grid grid-sm-gap">
        <TextItem
          content={product.name}
          normal
          classes="sparag-med text-left"
        />
        <PriceComponent price={product.price} discount={product.discount} />
        <TextItem
          content={product.description}
          normal
          classes="micro-lit text-left"
        />
        <ProductCart product={product} />
      </div>
    </div>
  );
};

export default ProductCard;
