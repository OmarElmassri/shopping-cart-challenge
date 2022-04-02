import { IProduct } from "shopping-cart-shared";

export interface Tag {
  icon: string;
  size?: string;
}

export enum Shape {
  circle = "circle",
  square = "square",
}

export enum Resize {
  cover = "cover",
  contain = "contain",
}

export interface ProductCardProps {
  product: IProduct;
}