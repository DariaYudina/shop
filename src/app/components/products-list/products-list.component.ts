import { Component, Input, OnInit, Output} from '@angular/core';
import { IProduct} from 'src/app/models/product.model';
import { CartService } from 'src/app/servises/cart.service';
import { ProductsService } from 'src/app/servises/products-service.service';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {
 @Input()
  products!: Array<IProduct>

  constructor(
    private productsService: ProductsService,
    private cartService: CartService){}

  ngOnInit(): void
  {
    this.products = this.productsService.getProducts();
  }

    addToCart(product: IProduct) {
      this.cartService.addToCart(product);
    }
}
