import express from 'express';
import { addProduct } from './productController';
const router = express.Router();

router.post('/', addProduct);

export default router;