import { Request, Response, } from 'express';
import { HydratedDocument } from 'mongoose';
import { Product, ProductModel } from './productModel';

export const addProduct = (req: Request, res: Response) => {
  let newProduct: HydratedDocument<Product> = new ProductModel({
    name: "My Product"
  });

  newProduct.save((err) => {
    if (err) return res.status(500).send({ error: err });
    return res.status(200).send('Done');
  })
}