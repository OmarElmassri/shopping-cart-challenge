import React from "react";
import { ICart } from "shopping-cart-shared";
import { useCart } from "../../context/cartContext";
// Helpers
import history from "../../utils/history";
// Components
import EmptyForm from "../common/empty/empty";
import TextItem from "../common/text/TextItem";
import CartItem from "./helpers/cartItem";
import PaymentSummary from "./helpers/paymentSummary";

const ShoppingCart: React.FunctionComponent = () => {
  // Context
  const { cart } = useCart();

  return (
    <div className="third-grid bottom-extend">
      <div className="single-grid align-self-start">
        <div className="noncard-container">
          <TextItem content="order" classes="slabel-hev" />
        </div>
        <div className="card all-med-padd full-width-imp">
          {cart.length === 0 ? (
            <EmptyForm
              title="empty-order"
              button="add-items"
              onClick={() => history.push("/")}
            />
          ) : (
            cart.map((cartItem: ICart, index: number) => {
              return (
                <>
                  <CartItem key={cartItem.itemId} cartItem={cartItem} />
                  {index + 1 !== cart.length && (
                    <div className="hor-div-full"></div>
                  )}
                </>
              );
            })
          )}
        </div>
      </div>
      <PaymentSummary />
    </div>
  );
};

export default ShoppingCart;
