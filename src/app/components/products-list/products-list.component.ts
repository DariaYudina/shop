import { Component } from '@angular/core';
import { ProductsService } from 'src/app/servises/products-service.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  constructor(public productsService: ProductsService){}
}
