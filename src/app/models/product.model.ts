export interface IProduct{
  id:string;
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Category;
}
export enum Category {
  category1 = 1,
   category2 = 2,
    category3 = 3
};

import {v4 as uuidv4} from 'uuid';
export class Product implements IProduct{
  constructor(
    public id = uuidv4(),
    public name = 'Name',
    public description = 'Descripton',
    public price = 1000,
    public isAvailable = false,
    public category = Category.category1)
    {}
}
