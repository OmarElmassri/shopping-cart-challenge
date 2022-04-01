import React from "react";
import { GetIcon } from "../../../../assets/IconGenerator";
import { Badge } from "antd";

const CartCounter = () => {
  return (
    <div className="pointer">
      <Badge count={5} color="#a70a49">
        <div className="radial grey1-back all-sm-padd">
          <GetIcon name="cart" color="dark" size="micro2" />
        </div>
      </Badge>
    </div>
  );
};

export default CartCounter;
