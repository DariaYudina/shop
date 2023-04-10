import { Component, Input, OnInit, Output} from '@angular/core';
import { IProduct, Product } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/servises/products-service.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {
 @Input()
  product!: IProduct;
  products!: Array<IProduct>;
  customer_products!: Array<IProduct>;

  constructor(private productsService: ProductsService){}
  ngOnInit(): void
  {
    this.product = this.productsService.getProduct()
    this.products = this.productsService.getProducts();
    this.customer_products = new Array<IProduct>();
  }

  onBuyProduct(product: IProduct){
    this.customer_products.push(product);
  }
}
