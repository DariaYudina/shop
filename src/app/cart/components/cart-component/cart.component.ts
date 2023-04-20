import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICartProduct } from '../../models/cart-product.model';
@Component({
  selector: 'app-cart-product',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartItemComponent {
  @Input()
  customer_product!: ICartProduct;

  @Output() cartProductRemoved = new EventEmitter<ICartProduct>();
  removeFromCart(product: ICartProduct) {
    this.cartProductRemoved.emit(product);
  }
}
