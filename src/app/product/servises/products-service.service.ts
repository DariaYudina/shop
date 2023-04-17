import { Injectable} from '@angular/core';
import { IProduct, Product } from '../models/product.model';
import {v4 as uuidv4} from 'uuid';
@Injectable({
  providedIn: 'root'
})
export class ProductsService{
  products: Array<IProduct> = new Array<IProduct>();

  constructor(){
    this.products = [
      new Product(uuidv4(),'Name 1', '', 100, true),
      new Product(uuidv4(),'Name 2', '', 100, true),
      new Product(uuidv4(),'Name 3', '', 100, false)
    ]
  }
  public getProducts(): Array<IProduct>{
    return this.products;
  }
  public getProduct()
  {
    return new Product();
  }
}
