import { Schema, model, connect } from 'mongoose';

export interface Product {
  name: string
}

let productSchema = new Schema<Product>({
  name: { type: String, required: true }
})

export const ProductModel = model<Product>("Product", productSchema);