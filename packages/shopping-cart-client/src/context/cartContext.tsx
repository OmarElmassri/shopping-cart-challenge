import React, { useState, useEffect } from "react";
import { ICart } from "shopping-cart-shared";
import { getCartItems } from "../services/cart";
import { HandleApiHook } from "../utils/hooks";

///////////////////////////////
// Cart Context
///////////////////////////////
type CartProps = {
  cart: ICart[];
  setCart: (cartItems: ICart[]) => void;
  loading: boolean;
};
const CartContext = React.createContext({} as CartProps);

///////////////////////////////
// Cart Provider
///////////////////////////////
const CartProvider = (props: any) => {
  // Hooks
  const { loading, submit } = HandleApiHook(true);
  const [cart, setCart] = useState<any>([]);

  useEffect(() => {
    submit({
      service: getCartItems,
      onSuccess: (cartItems: ICart[]) => {
        setCart(cartItems);
      },
    });
  }, []);

  const cartContextValue = {
    cart,
    setCart,
    loading,
  };

  return <CartContext.Provider value={cartContextValue} {...props} />;
};

///////////////////////////////
// Consumer Hook
///////////////////////////////
const useCart = () => React.useContext(CartContext);

export { CartContext, CartProvider, useCart };
