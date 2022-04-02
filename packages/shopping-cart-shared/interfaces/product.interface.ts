export interface IProduct {
  itemId: string,
  name: string,
  description: string,
  price: number,
  imageUrl: string,
  discount?: number,
}