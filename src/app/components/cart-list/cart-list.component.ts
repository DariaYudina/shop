import { Component, OnInit, Input } from '@angular/core';
import { IProduct, Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/servises/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit{
  @Input()
  products!: Array<IProduct>;
  constructor(private cartService: CartService){}

  ngOnInit(): void
  {
    this.products = this.cartService.getProducts();
  }

  addToCart(product: IProduct){
    this.cartService.addToCart(product);
    this.products = this.cartService.getProducts();
  }

  removeItemFromCart(product: IProduct){
    this.cartService.removeFromCart(product);
    this.products = this.cartService.getProducts();
  }

  removeAll(){
    this.cartService.removeAll();
    this.products = this.cartService.getProducts();
  }

  getProductsCount(){
    return this.cartService.customer_products.length;
  }
}
