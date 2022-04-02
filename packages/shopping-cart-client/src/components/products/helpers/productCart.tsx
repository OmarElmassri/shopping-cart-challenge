import React, { useEffect, useState } from "react";
import { ICart } from "shopping-cart-shared";
import { useCart } from "../../../context/cartContext";
import FloatIconButton from "../../common/buttons/floatIconButton";
import NormalButton from "../../common/buttons/normalButton";
import { ProductCardProps } from "../../common/interfaces";
import TextItem from "../../common/text/TextItem";

const ProductCart: React.FunctionComponent<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  // Context
  const { cart, setCart } = useCart();
  // Hooks
  const [addedItem, setAddedItem] = useState<ICart | undefined>(undefined);

  // Check if product is added
  useEffect(() => {
    setAddedItem(
      cart.find((cartItem: ICart) => cartItem.itemId === product.itemId)
    );
  }, [cart]);

  // Add item to cart
  const addItem = () => {
    let cartSample: ICart[] = [...cart];
    let isAdded: ICart | undefined;
    cartSample.push({
      ...product,
      qty: 1,
    });
    setCart(cartSample);
  };

  // Remove item
  const removeItem = () => {};

  return (
    <div className="flex justify-end">
      {!addedItem ? (
        <NormalButton content="add-to-cart" onClick={addItem} radial />
      ) : (
        <div className="flex-nowrap">
          <FloatIconButton
            name={addedItem.qty === 1 ? "trash" : "minus"}
            onClick={removeItem}
            color={addedItem.qty === 1 ? "second" : "brand"}
            size="tiny2"
            classes="side-med-padd"
          />
          <div className="grey-back box-sm-padd border-grey1">
            <TextItem content={addedItem.qty.toString()} classes="parag-med" />
          </div>
          <FloatIconButton
            name="plus"
            onClick={addItem}
            size="tiny2"
            classes="side-med-padd"
          />
        </div>
      )}
    </div>
  );
};

export default ProductCart;
