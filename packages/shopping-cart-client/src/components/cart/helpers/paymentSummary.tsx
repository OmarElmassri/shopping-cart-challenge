import React, { useEffect, useState } from "react";
import { ICart } from "shopping-cart-shared";
import { useCart } from "../../../context/cartContext";
import { calculateDiscount } from "../../../utils/helperFunctions";
// Components
import NormalButton from "../../common/buttons/normalButton";
import TextItem from "../../common/text/TextItem";
import CouponApply from "./couponApply";
import PaymentItem from "./paymentItem";

const PaymentSummary: React.FunctionComponent = () => {
  // Context
  const { cart } = useCart();
  // Hooks
  const [order, setOrder] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);

  // Listen to cart
  useEffect(() => {
    let orderPrice: number = 0;
    cart.forEach((cartItem: ICart) => {
      let itemPrice = cartItem.price * cartItem.qty;
      orderPrice += cartItem.discount
        ? calculateDiscount(itemPrice, cartItem.discount)
        : itemPrice;
    });
    setOrder(orderPrice);
    setTax(orderPrice * 0.14);
  }, [cart]);

  // Apply coupon
  const applyCoupon = () => {};

  return (
    <div className="single-grid align-self-start">
      <TextItem content="payment" classes="slabel-hev" />
      <div className="card all-med-padd full-width-imp">
        <CouponApply applyCoupon={applyCoupon} />
        <div className="hor-div-full vertical-marg"></div>
        <PaymentItem name="order-summary" value={order} />
        <PaymentItem
          name="order-discount"
          textClasses="second"
          value={discount}
        />
        <PaymentItem name="tax" value={tax} />
        <PaymentItem
          name="total"
          classes="top-med-marg"
          value={order + discount + tax}
        />
        <NormalButton
          content="checkout"
          onClick={() => {}}
          classes="full-width-imp top-med-marg"
        />
      </div>
    </div>
  );
};

export default PaymentSummary;
