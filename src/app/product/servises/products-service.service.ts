import { Injectable} from '@angular/core';
import { IProduct, Product } from '../models/product.model';

export const products = [
  new Product(),
  new Product(),
  new Product(),
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  public getProducts(): Array<IProduct>{
    return products;
  }
  public getProduct()
  {
    return new Product();
  }
}