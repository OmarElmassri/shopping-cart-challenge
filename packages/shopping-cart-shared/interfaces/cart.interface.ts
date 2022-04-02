export interface ICart {
  itemId: string,
  name: string,
  price: number,
  qty: number,
  description: string,
  imageUrl: string,
  discount?: number
}