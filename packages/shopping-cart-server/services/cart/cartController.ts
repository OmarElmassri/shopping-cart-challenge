import { Request, Response, } from 'express';
import { HydratedDocument } from 'mongoose';
import { CartModel } from './cartModel';
import { ICart } from 'shopping-cart-shared';

export const addCartItem = (req: Request, res: Response) => {
  let newCart: HydratedDocument<ICart> = new CartModel({
    name: "My Cart"
  });

  newCart.save((err) => {
    if (err) return res.status(500).send({ error: err });
    return res.status(200).send('Done');
  })
}