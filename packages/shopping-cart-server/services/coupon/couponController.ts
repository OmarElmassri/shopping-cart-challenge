import { Request, Response, } from 'express';
import { ICoupon } from 'shopping-cart-shared';
import { CouponModel } from './couponModel';

export const checkCoupon = async (req: Request, res: Response) => {
  let { couponCode }: { couponCode: string } = req.body;

  if (!couponCode) return res.status(400).send({
    errors: {
      coupon: {
        message: "required",
        path: "coupon"
      }
    }
  });

  let coupon: ICoupon = await CouponModel.findOne({ code: couponCode }) as ICoupon;

  if (!coupon) return res.status(400).send({
    errors: {
      coupon: {
        message: "not-valid",
        path: "coupon"
      }
    }
  });

  return res.status(200).send(coupon);
}