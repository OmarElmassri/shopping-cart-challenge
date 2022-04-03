import React from "react";
import { ICart, IProduct } from "shopping-cart-shared";
import { products } from "../../../assets/const/products";
import { useCart } from "../../../context/cartContext";
import { Resize, Shape } from "../../../utils/interfaces";
import FloatIconButton from "../../common/buttons/floatIconButton";
import ImageComponent from "../../common/image/image";
import PriceComponent from "../../common/price/price";
import TextItem from "../../common/text/TextItem";

interface ICartItemProps {
  cartItem: ICart;
}

const CartItem: React.FunctionComponent<ICartItemProps> = ({
  cartItem,
}: ICartItemProps) => {
  // Context
  const { loading, addCartItemToDB, removeCartItemFromDB } = useCart();

  return (
    <div className="cart-item grid all-med-padd">
      <ImageComponent
        image={cartItem.imageUrl}
        shape={Shape.square}
        fill
        resize={Resize.contain}
        preview
        minHeight={100}
      />
      <div className="single-grid grid-sm-gap">
        <TextItem
          content={cartItem.name}
          normal
          classes="micro-med text-left"
        />
        <TextItem
          content={cartItem.description}
          normal
          classes="micro-lit text-left"
        />
      </div>
      <PriceComponent
        price={cartItem.price * cartItem.qty}
        discount={cartItem.discount}
        classes="align-self-center flex-column"
      />
      <div className="flex-nowrap">
        <FloatIconButton
          name={cartItem.qty === 1 ? "trash" : "minus"}
          onClick={() =>
            removeCartItemFromDB(
              products.find(
                (product: IProduct) => product.itemId === cartItem.itemId
              ) as IProduct
            )
          }
          color={cartItem.qty === 1 ? "second" : "brand"}
          size="tiny2"
          classes="side-med-padd"
          disabled={loading}
        />
        <div className="grey-back box-sm-padd border-grey1">
          <TextItem content={cartItem.qty.toString()} classes="parag-med" />
        </div>
        <FloatIconButton
          name="plus"
          onClick={() =>
            addCartItemToDB(
              products.find(
                (product: IProduct) => product.itemId === cartItem.itemId
              ) as IProduct
            )
          }
          size="tiny2"
          classes="side-med-padd"
          disabled={loading}
        />
      </div>
    </div>
  );
};

export default CartItem;
