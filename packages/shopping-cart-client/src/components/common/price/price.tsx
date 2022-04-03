import React from "react";
// Helpers
import {
  calculateDiscount,
  numberWithCommas,
} from "../../../utils/helperFunctions";
// Components
import TextItem from "../text/TextItem";

interface IPriceComponent {
  price: number;
  discount?: number;
  classes?: string;
}

const PriceComponent: React.FunctionComponent<IPriceComponent> = ({
  price,
  discount,
  classes,
}: IPriceComponent) => {
  return (
    <div className={`flex justify-start ${classes}`}>
      {discount && (
        <TextItem
          content="price"
          params={{ value: numberWithCommas(price) }}
          classes="micro-hev text-left text-line text-opacity"
        />
      )}
      <TextItem
        content="price"
        params={{
          value: numberWithCommas(
            discount ? calculateDiscount(price, discount) : price
          ),
        }}
        classes={`tiny-hev text-left ${discount && "side-sm-marg"}`}
      />
      {discount && (
        <TextItem
          content="discount"
          params={{ value: discount.toString() }}
          classes="micro-hev text-left second"
        />
      )}
    </div>
  );
};

export default PriceComponent;
