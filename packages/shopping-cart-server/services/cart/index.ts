import express from 'express';
import { addCartItem, getCartItems, removeCartItem } from './cartController';
const router = express.Router();

router.get('/', getCartItems);
router.post('/', addCartItem);
router.put('/', removeCartItem);

export default router;