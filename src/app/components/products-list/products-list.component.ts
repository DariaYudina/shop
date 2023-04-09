import { Component, OnInit} from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/servises/products-service.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {
  product!: Product;
  products!: Array<Product>;

  constructor(private productsService: ProductsService){}
  ngOnInit()
  {
    this.product = this.productsService.getProduct()
    this.products = this.productsService.getProducts();
  }
}
