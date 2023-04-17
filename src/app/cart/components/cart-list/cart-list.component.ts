import { Component, OnInit, Input } from '@angular/core';
import { IProduct} from 'src/app/product/models/product.model';
import { CartService } from 'src/app/cart/servises/cart.service';
import { ICartProduct } from '../../models/cart-product.model';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit{
  @Input()
  products!: Array<ICartProduct>;
  constructor(private cartService: CartService){}

  ngOnInit(): void
  {
    this.products = this.cartService.getProducts();
  }

  addToCart(product: ICartProduct){
    this.cartService.addToCart(product);
    //this.products = this.cartService.getProducts();
  }

  removeItemFromCart(product: ICartProduct){
    this.cartService.removeFromCart(product);
    //this.products = this.cartService.getProducts();
  }

  removeAll(){
    this.cartService.removeAll();
    //this.products = this.cartService.getProducts();
  }

  getProductsPriceSumm(){
    return this.cartService.customer_products.reduce((a,b) => a + b.price, 0);
  }
}
