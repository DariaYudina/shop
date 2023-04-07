import { Component} from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  Name: string = "Name";
  Description: string = "Description";
  Price: number = 1000;
  IsAvailable: boolean = false;
  Category: Category = 1;

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
