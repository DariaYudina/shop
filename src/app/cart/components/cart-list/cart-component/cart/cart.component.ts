import { Component, Input } from '@angular/core';
import { ICartProduct } from '../../../../models/cart-product.model';
@Component({
  selector: 'app-cart-product',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  private _customer_product!: ICartProduct;

  @Input()
  get customer_product(): ICartProduct {
    return this._customer_product;
  }

  set customer_product(value: ICartProduct){
  this._customer_product = value;
  }
}
