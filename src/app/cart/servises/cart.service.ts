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

  public addToCart(product: IProduct) {
    const cartProduct: ICartProduct = new CartProduct(
      product.id,
      product.name,
      product.description,
      product.price,
      product.isAvailable,
      product.category)
    this.customer_products.push(cartProduct);
  }

  removeFromCart(product: ICartProduct){
    this.customer_products = this.customer_products.filter(i => i.cart_id !== product.cart_id);
  }

  removeAll(){
    this.customer_products = new Array<ICartProduct>;
  }
}
