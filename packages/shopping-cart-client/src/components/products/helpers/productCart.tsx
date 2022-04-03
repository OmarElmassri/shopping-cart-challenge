import React, { useEffect, useState } from "react";
// Helpers
import { ICart } from "shopping-cart-shared";
import { useCart } from "../../../context/cartContext";
// Components
import FloatIconButton from "../../common/buttons/floatIconButton";
import NormalButton from "../../common/buttons/normalButton";
import { ProductCardProps } from "../../../utils/interfaces";
import TextItem from "../../common/text/TextItem";

const ProductCart: React.FunctionComponent<ProductCardProps> = ({
  product,
}: ProductCardProps) => {
  // Context
  const { loading, cart, addCartItemToDB, removeCartItemFromDB } = useCart();
  // Hooks
  const [addedItem, setAddedItem] = useState<ICart | undefined>(undefined);

  // Check if product is added
  useEffect(() => {
    setAddedItem(
      cart.find((cartItem: ICart) => cartItem.itemId === product.itemId)
    );
  }, [cart]);

  return (
    <div className="flex justify-end">
      {!addedItem ? (
        <NormalButton
          disabled={loading}
          content="add-to-cart"
          onClick={() => addCartItemToDB(product)}
          radial
        />
      ) : (
        <div className="flex-nowrap">
          <FloatIconButton
            name={addedItem.qty === 1 ? "trash" : "minus"}
            onClick={() => removeCartItemFromDB(product)}
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
            onClick={() => addCartItemToDB(product)}
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
