import { Schema, model } from 'mongoose';
import { ICart } from 'shopping-cart-shared';

let cartSchema = new Schema<ICart>({
  itemId: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  qty: { type: Number, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
  discount: { type: Number }
})

export const CartModel = model<ICart>("Cart", cartSchema);