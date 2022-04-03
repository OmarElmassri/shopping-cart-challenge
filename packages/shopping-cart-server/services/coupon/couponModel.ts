import { Schema, model } from 'mongoose';
import { ICoupon } from 'shopping-cart-shared';

let couponSchema = new Schema<ICoupon>({
  code: { type: String, required: true, unique: true },
  value: { type: Number, required: true },
  type: { type: String, required: true }
});

export const CouponModel = model<ICoupon>("Coupon", couponSchema);