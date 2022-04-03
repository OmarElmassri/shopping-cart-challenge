import { Request, Response, } from 'express';
import { HydratedDocument } from 'mongoose';
import { CartModel } from './cartModel';
import { ICart, IProduct } from 'shopping-cart-shared';

export const getCartItems = async (req: Request, res: Response) => {
  let cartItems = await CartModel.find();
  return res.status(200).send(cartItems);
}

export const addCartItem = async (req: Request, res: Response) => {
  let { itemId, name, description, price, imageUrl, discount }: IProduct = req.body;

  let cartItem: ICart = await CartModel.findOne({ itemId }) as ICart;

  if (cartItem) cartItem.qty += 1;
  else {
    cartItem = new CartModel({
      itemId, name, description, price, imageUrl, qty: 1,
      discount
    });
  }
  (cartItem as HydratedDocument<ICart>).save((err) => {
    if (err) return res.status(500).send({ error: err });
    return res.status(200).send('Done');
  })
}

export const removeCartItem = async (req: Request, res: Response) => {
  let { itemId }: { itemId: string } = req.body;

  let cartItem: ICart = await CartModel.findOne({ itemId }) as ICart;

  if (cartItem.qty === 1) await CartModel.deleteOne({ itemId });
  else await CartModel.findOneAndUpdate({ itemId }, { $inc: { qty: -1 } });

  return res.status(200).send('Done');
}

export const clearCart = async (req: Request, res: Response) => {
  await CartModel.deleteMany();
  return res.status(200).send('Done');
}