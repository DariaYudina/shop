import { Component, Input, OnInit, Output } from '@angular/core';
import { IProduct } from 'src/app/product/models/product.model';
import { CartService } from 'src/app/cart/servises/cart.service';
import { ProductsService } from 'src/app/product/servises/products-service.service';
import { CartProduct, ICartProduct } from 'src/app/cart/models/cart-product.model';
@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  providers: [ProductsService]
})
export class ProductsListComponent implements OnInit {
  products!: Array<IProduct>
  constructor(
    public productsService: ProductsService,
    public cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  productAdded(product: IProduct) {
    const cartProduct: ICartProduct = new CartProduct(product)
    this.cartService.addToCart(cartProduct);
    this.cartService.click(cartProduct);
  }
}

