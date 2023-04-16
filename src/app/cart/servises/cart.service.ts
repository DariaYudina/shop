import { Injectable } from '@angular/core';
import { Category, IProduct, Product } from '../../product/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  customer_products: Array<IProduct>;
  constructor() {
    this.customer_products = new Array<IProduct>();
   }

  public getProducts() {
    return this.customer_products;
  }

  public addToCart(product: IProduct) {
    this.customer_products.push(product);
  }

  removeFromCart(product: IProduct){
    this.customer_products = this.customer_products.filter(i => i.id !== product.id);
  }

  removeAll(){
    this.customer_products = new Array<IProduct>;
  }
}
