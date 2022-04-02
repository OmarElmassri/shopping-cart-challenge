import React, { useState } from "react";

///////////////////////////////
// Cart Context
///////////////////////////////
type CartProps = {
  cart: any;
  products: any;
};
const CartContext = React.createContext({} as CartProps);

///////////////////////////////
// Cart Provider
///////////////////////////////
const CartProvider = (props: any) => {
  const [cart, setCart] = useState<any>([]);
  const [products, setProducts] = useState<any>([]);

  const cartContextValue = {
    cart,
    setCart,
    products,
    setProducts,
  };

  return <CartContext.Provider value={cartContextValue} {...props} />;
};

///////////////////////////////
// Consumer Hook
///////////////////////////////
const useCart = () => React.useContext(CartContext);

export { CartContext, CartProvider, useCart };
