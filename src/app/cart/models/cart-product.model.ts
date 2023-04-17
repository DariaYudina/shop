export interface ICartProduct{
  id:string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Category;
  cart_id: string;
}
export enum Category {
  category1 = 1,
   category2 = 2,
    category3 = 3
}

import {v4 as uuidv4} from 'uuid';
export class CartProduct implements ICartProduct{
  constructor(
    public id = uuidv4(),
    public name = 'Name',
    public description = 'Descripton',
    public price = 1000,
    public isAvailable = false,
    public category = Category.category1,
    public cart_id = '')
    {}
}
