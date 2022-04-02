import express from 'express';
import { addCartItem } from './cartController';
const router = express.Router();

router.post('/', addCartItem);

export default router;