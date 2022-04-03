import React, { useEffect, useState } from "react";
// Helpers
import { ICart } from "shopping-cart-shared";
import { useCart } from "../../../context/cartContext";
import { HandleApiHook } from "../../../utils/hooks";
import { addCartItem, removeCartItem } from "../../../services/cart";
// Components
import FloatIconButton from "../../common/buttons/floatIconButton";
import NormalButton from "../../common/buttons/normalButton";
import { ProductCardProps } from "../../../utils/interfaces";
import TextItem from "../../common/text/TextItem";

const ProductCart: React.FunctionComponent<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  // Context
  const { cart, setCart } = useCart();
  // Hooks
  const { loading, submit } = HandleApiHook();
  const [addedItem, setAddedItem] = useState<ICart | undefined>(undefined);

  // Check if product is added
  useEffect(() => {
    setAddedItem(
      cart.find((cartItem: ICart) => cartItem.itemId === product.itemId)
    );
  }, [cart]);

  // Add cart item to database
  const addCartItemToDB = () => {
    submit({
      service: addCartItem,
      body: product,
      onSuccess: () => {
        addItem();
      },
    });
  };

  // Remove cart item from database
  const removeCartItemFromDB = () => {
    submit({
      service: removeCartItem,
      body: { itemId: product.itemId },
      onSuccess: () => {
        removeItem();
      },
    });
  };

  // Add item to cart
  const addItem = () => {
    let cartSample: ICart[] = [...cart];
    if (addedItem) {
      let cartItem: ICart = cartSample.find(
        (cart: ICart) => cart.itemId === product.itemId
      ) as ICart;
      cartItem.qty += 1;
    } else {
      cartSample.push({
        ...product,
        qty: 1,
      });
    }
    setCart(cartSample);
  };

  // Remove item
  const removeItem = () => {
    let cartSample: ICart[] = [...cart];
    cartSample = cartSample
      .map((cart: ICart) => {
        if (cart.itemId === product.itemId) {
          if (cart.qty === 1) return null;
          cart.qty -= 1;
        }
        return cart;
      })
      .filter((cartElement: ICart | null) => cartElement as ICart) as ICart[];
    setCart(cartSample);
  };

  return (
    <div className="flex justify-end">
      {!addedItem ? (
        <NormalButton
          disabled={loading}
          content="add-to-cart"
          onClick={addCartItemToDB}
          radial
        />
      ) : (
        <div className="flex-nowrap">
          <FloatIconButton
            name={addedItem.qty === 1 ? "trash" : "minus"}
            onClick={removeCartItemFromDB}
            color={addedItem.qty === 1 ? "second" : "brand"}
            size="tiny2"
            classes="side-med-padd"
            disabled={loading}
          />
          <div className="grey-back box-sm-padd border-grey1">
            <TextItem content={addedItem.qty.toString()} classes="parag-med" />
          </div>
          <FloatIconButton
            name="plus"
            onClick={addCartItemToDB}
            size="tiny2"
            classes="side-med-padd"
            disabled={loading}
          />
        </div>
      )}
    </div>
  );
};

export default ProductCart;
