import React from "react";
// Helpers
import { ProductCardProps, Resize, Shape } from "../../common/interfaces";
// Components
import ImageComponent from "../../common/image/image";
import TextItem from "../../common/text/TextItem";
import ProductCart from "./productCart";
import ProductPrice from "./productPrice";

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
        <ProductPrice product={product} />
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
