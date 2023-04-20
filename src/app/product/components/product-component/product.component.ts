import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct, Product } from '../../models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Input()
  product!: IProduct;

  @Output() productAdded = new EventEmitter<IProduct>();
  addToCart(product: IProduct) {
    this.productAdded.emit(product);
  }
}

