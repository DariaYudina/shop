import { Component, Input} from '@angular/core';
import { NgForm} from '@angular/forms';
import {IProduct, Product} from '../../../models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  private _product!: Product;
  @Input()
  get product(): Product {
    return this._product;
  };
 set product(value: Product){
  this._product = value;
 }
  onBuy(){
    console.log("Purchase was successful");
    alert("Purchase was successful");
  }
}

enum Category {
  category1 = 1,
   category2 = 2,
    category3 = 3
};