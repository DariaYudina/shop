import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/cart/servises/cart.service';
import { ICartProduct } from '../../models/cart-product.model';
import { ProductsService } from 'src/app/product/servises/products-service.service';
import { Product } from 'src/app/product/models/product.model';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit{
  @Input()
  cartProducts!: Array<ICartProduct>;
  productsCount!: number;
  productsPriceSumm!: number;

  message = '';
  constructor(
    public cartService: CartService,
    public productService: ProductsService){}

  ngOnInit(): void
  {
    this.cartProducts = this.cartService.getProducts();
    this.cartService.buttonClick$.subscribe((product: ICartProduct) => {
      this.productsPriceSumm += product.product.price;
      this.productsCount ++;
    });
  }

  removeItemFromCart(product: ICartProduct){
    this.cartService.removeFromCart(product);
    this.cartProducts = this.cartService.getProducts();
  }

  removeAll(){
    this.cartService.removeAll();
    this.cartProducts = this.cartService.getProducts();
  }

  getTotalCount(){
    return this.cartService.getProducts().reduce((a,b) => a + b.count, 0);
  }
  getTotalPrice(){
    return this.cartService.getProducts().reduce((a,b) => a + b.product.price * b.count, 0);
  }
}
