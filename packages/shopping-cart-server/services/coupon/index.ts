import express from 'express';
import { checkCoupon } from './couponController';
const router = express.Router();

// Check coupon
router.post('/check', checkCoupon);

export default router;