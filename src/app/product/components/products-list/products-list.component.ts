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
    private productsService: ProductsService,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.products = this.productsService.getProducts();
  }

  productAdded(product: IProduct) {
    const cartProduct: ICartProduct = new CartProduct(product)
    this.cartService.addToCart(cartProduct);
  }
}
  // addToCart(product: IProduct) {
  //   const productInCart = this.cartService.getProducts().filter(i => i.id === product.id);
  //   const productAdded = productInCart.length != 0;

  //   if(!productAdded){
  //     this.cartService.addToCart(product);
  //   }else{
  //     productInCart[0].count += 1;
  //   }
  // }

