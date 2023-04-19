import { Component, Input, Output} from '@angular/core';
import {Product} from '../../models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  private _product!: Product;
  @Input()
  @Output()
  get product(): Product {
    return this._product;
  }

  set product(value: Product){
  this._product = value;
  }
}

