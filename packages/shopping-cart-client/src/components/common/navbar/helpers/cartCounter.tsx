import React, { useEffect, useState } from "react";
// Packages
import { Badge } from "antd";
// Helpers
import { ICart } from "shopping-cart-shared";
import history from "../../../../utils/history";
// Components
import { GetIcon } from "../../../../assets/IconGenerator";
// Context
import { useCart } from "../../../../context/cartContext";

const CartCounter: React.FunctionComponent = () => {
  // Context
  const { cart } = useCart();
  // Hooks
  const [itemsCount, setItemsCount] = useState<number>(0);

  // Calculate items count
  useEffect(() => {
    let currentCount: number = 0;
    if (cart.length === 0) setItemsCount(0);
    else {
      cart.forEach((cartItem: ICart) => {
        currentCount += cartItem.qty;
      });
    }
    setItemsCount(currentCount);
  }, [cart]);

  return (
    <div onClick={() => history.push("/shopping-cart")} className="pointer">
      <Badge count={itemsCount} color="#a70a49">
        <div className="radial grey1-back all-sm-padd">
          <GetIcon name="cart" color="dark" size="micro2" />
        </div>
      </Badge>
    </div>
  );
};

export default CartCounter;
