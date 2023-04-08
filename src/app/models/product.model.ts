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
