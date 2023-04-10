export interface IProduct{
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
export class Product implements IProduct{
  constructor(
    public name = 'Name',
    public description = 'Descripton',
    public price = 1000,
    public isAvailable = false,
    public category = Category.category1)
    {}
}
