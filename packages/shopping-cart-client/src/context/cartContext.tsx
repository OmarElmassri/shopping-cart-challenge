import React, { useState, useEffect } from "react";
import { ICart, IProduct } from "shopping-cart-shared";
import { addCartItem, getCartItems, removeCartItem } from "../services/cart";
import { HandleApiHook } from "../utils/hooks";

///////////////////////////////
// Cart Context
///////////////////////////////
type CartProps = {
  cart: ICart[];
  setCart: (cartItems: ICart[]) => void;
  loading: boolean;
  addCartItemToDB: (product: IProduct) => void;
  removeCartItemFromDB: (product: IProduct) => void;
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

  // Add cart item to database
  const addCartItemToDB = (product: IProduct) => {
    submit({
      service: addCartItem,
      body: product,
      onSuccess: () => {
        addItem(product);
      },
    });
  };

  // Remove cart item from database
  const removeCartItemFromDB = (product: IProduct) => {
    submit({
      service: removeCartItem,
      body: { itemId: product.itemId },
      onSuccess: () => {
        removeItem(product);
      },
    });
  };

  // Add item to cart
  const addItem = (product: IProduct) => {
    let cartSample: ICart[] = [...cart];
    let cartItem: ICart = cartSample.find(
      (cart: ICart) => cart.itemId === product.itemId
    ) as ICart;
    if (cartItem) cartItem.qty += 1;
    else {
      cartSample.push({
        ...product,
        qty: 1,
      });
    }
    setCart(cartSample);
  };

  // Remove item
  const removeItem = (product: IProduct) => {
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

  const cartContextValue = {
    cart,
    setCart,
    loading,
    addCartItemToDB,
    removeCartItemFromDB,
  };

  return <CartContext.Provider value={cartContextValue} {...props} />;
};

///////////////////////////////
// Consumer Hook
///////////////////////////////
const useCart = () => React.useContext(CartContext);

export { CartContext, CartProvider, useCart };
