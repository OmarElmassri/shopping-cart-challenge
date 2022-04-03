import React, { useEffect, useState } from "react";
// Helpers
import { ICart, ICoupon } from "shopping-cart-shared";
import { useCart } from "../../../context/cartContext";
import { calculateDiscount, fixedNumber } from "../../../utils/helperFunctions";
import { HandleApiHook } from "../../../utils/hooks";
// Components
import NormalButton from "../../common/buttons/normalButton";
import ConfirmModal from "../../common/modals/confirmModal";
import TextItem from "../../common/text/TextItem";
import CouponApply from "./couponApply";
import PaymentItem from "./paymentItem";

const PaymentSummary: React.FunctionComponent = () => {
  // Context
  const { cart, setCart } = useCart();
  // Hooks
  const { submit } = HandleApiHook();
  const [order, setOrder] = useState<number>(0);
  const [discount, setDiscount] = useState<number>(0);
  const [tax, setTax] = useState<number>(0);
  const [open, setOpen] = useState<boolean>(false);
  const [appliedCoupon, setAppliedCoupon] = useState<ICoupon | null>(null);

  // Listen to cart
  useEffect(() => {
    let orderPrice: number = 0;
    cart.forEach((cartItem: ICart) => {
      let itemPrice = cartItem.price * cartItem.qty;
      orderPrice += cartItem.discount
        ? calculateDiscount(itemPrice, cartItem.discount)
        : itemPrice;
    });
    setOrder(fixedNumber(orderPrice));
    setTax(fixedNumber(orderPrice * 0.14));
  }, [cart]);

  // Apply coupon
  const applyCoupon = (coupon: ICoupon) => {
    if (coupon.type === "percentage")
      setDiscount(fixedNumber(-(order * (coupon.value / 100))));
    else setDiscount(fixedNumber(-coupon.value));
  };

  // Clear cart
  const clearCart = () => {
    setOpen(false);
    setCart([]);
    setAppliedCoupon(null);
    setDiscount(0);
    submit({
      service: clearCart,
    });
  };

  return (
    <div className="single-grid align-self-start">
      <div className="noncard-container">
        <TextItem content="payment" classes="slabel-hev" />
      </div>
      <div className="card all-med-padd full-width-imp">
        <CouponApply
          applyCoupon={applyCoupon}
          setDiscount={setDiscount}
          appliedCoupon={appliedCoupon}
          setAppliedCoupon={setAppliedCoupon}
        />
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
          value={fixedNumber(order + discount + tax)}
        />
        {cart.length !== 0 && (
          <NormalButton
            content="checkout"
            disabled={cart.length === 0}
            onClick={() => setOpen(true)}
            classes="full-width-imp top-med-marg"
          />
        )}
      </div>
      <ConfirmModal
        open={open}
        setOpen={setOpen}
        title="checkout-ques"
        talk="checkout-talk"
        onAgree={clearCart}
      />
    </div>
  );
};

export default PaymentSummary;
