export interface ICartProduct{
  product: IProduct;
  count: number;
  cart_id:string;
}
export enum Category {
  category1 = 1,
   category2 = 2,
    category3 = 3
}

import { IProduct, Product } from 'src/app/product/models/product.model';
import {v4 as uuidv4} from 'uuid';
export class CartProduct implements ICartProduct{
  constructor(
    public product = new Product(),
    public count = 1,
    public cart_id = uuidv4())
    {}
}
