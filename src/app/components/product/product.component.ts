import { Component, Input} from '@angular/core';
import { NgForm} from '@angular/forms';
import {IProduct, Product} from '../../models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {

  @Input()
  product: Product = new Product();

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
