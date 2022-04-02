import React from "react";
import history from "../../utils/history";
import NormalButton from "../common/buttons/normalButton";
import EmptyForm from "../common/empty/empty";
import TextItem from "../common/text/TextItem";
import CouponApply from "./helpers/couponApply";
import PaymentItem from "./helpers/paymentItem";

const ShoppingCart: React.FunctionComponent = () => {
  const applyCoupon = () => {};
  return (
    <div className="third-grid">
      <div className="single-grid align-self-start">
        <TextItem content="order" classes="slabel-hev" />
        <div className="card all-med-padd full-width-imp">
          <EmptyForm
            title="empty-order"
            button="add-items"
            onClick={() => history.push("/")}
          />
        </div>
      </div>
      <div className="single-grid align-self-start">
        <TextItem content="payment" classes="slabel-hev" />
        <div className="card all-med-padd full-width-imp">
          <CouponApply applyCoupon={applyCoupon} />
          <div className="hor-div-full vertical-marg"></div>
          <PaymentItem name="order-summary" />
          <PaymentItem name="tax" />
          <PaymentItem name="total" classes="top-med-marg" />
          <NormalButton
            content="checkout"
            onClick={() => {}}
            classes="full-width-imp top-med-marg"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;
