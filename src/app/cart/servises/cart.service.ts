import { Injectable } from '@angular/core';
import { IProduct,} from '../../product/models/product.model';
import { ICartProduct, CartProduct} from '../models/cart-product.model';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  customer_products: Array<ICartProduct>;
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
      productInCart[0].count += product.count;
    }
  }

  removeFromCart(product: ICartProduct){
    this.customer_products = this.customer_products.filter(i => i.count > 1? i.count-- : i.cart_id !== product.cart_id);
  }

  removeAll(){
    this.customer_products = new Array<ICartProduct>;
  }
}
