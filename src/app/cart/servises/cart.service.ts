import { Injectable } from '@angular/core';
import { ICartProduct} from '../models/cart-product.model';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private customer_products: Array<ICartProduct>;
  buttonClick$ = new Subject<ICartProduct>();

  constructor() {
    this.customer_products = new Array<ICartProduct>();
   }

  public getProducts() {
    return this.customer_products;
  }

  public addToCart(product: ICartProduct) {
    const productInCart = this.customer_products.filter(i => i.product.id === product.product.id);
    const firstProductAdded = productInCart.length != 0;

    if (!firstProductAdded) {
      this.customer_products.push(product);
    } else {
      productInCart[0].quantity += product.quantity;
    }
  }

  click(cartProduct: ICartProduct) {
    this.buttonClick$.next(cartProduct);
  }

  removeFromCart(product: ICartProduct){
    this.customer_products = this.customer_products.filter(i => i.quantity > 1? i.quantity-- : i.cart_id !== product.cart_id);
  }

  removeAll(){
    this.customer_products = new Array<ICartProduct>;
  }

  getProductsCount(){
    return this.customer_products.reduce((a,b) => a + b.quantity, 0);
  }
  getProductsPriceSumm(){
    return this.customer_products.reduce((a,b) => a + b.product.price * b.quantity, 0);
  }
}
