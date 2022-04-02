import React, { useState } from "react";
import { ICart } from "shopping-cart-shared";

///////////////////////////////
// Cart Context
///////////////////////////////
type CartProps = {
  cart: ICart[];
  setCart: (cartItems: ICart[]) => void;
};
const CartContext = React.createContext({} as CartProps);

///////////////////////////////
// Cart Provider
///////////////////////////////
const CartProvider = (props: any) => {
  const [cart, setCart] = useState<any>([]);

  const cartContextValue = {
    cart,
    setCart,
  };

  return <CartContext.Provider value={cartContextValue} {...props} />;
};

///////////////////////////////
// Consumer Hook
///////////////////////////////
const useCart = () => React.useContext(CartContext);

export { CartContext, CartProvider, useCart };
