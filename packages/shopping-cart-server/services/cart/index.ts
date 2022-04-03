import express from 'express';
import { addCartItem, getCartItems, removeCartItem } from './cartController';
const router = express.Router();

// Get catr items
router.get('/', getCartItems);

// Add cart item
router.post('/', addCartItem);

// Remove cart item
router.put('/', removeCartItem);

export default router;