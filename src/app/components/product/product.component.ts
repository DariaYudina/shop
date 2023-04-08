import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';
import {IProduct} from '../../models/product.model'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  product: IProduct = {
    name: "product",
    description: "description",
    price: 1000,
    isAvailable: false,
    category: Category.category1,
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
