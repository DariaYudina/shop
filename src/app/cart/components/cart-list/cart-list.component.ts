import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { CartService } from 'src/app/cart/servises/cart.service';
import { ICartProduct } from '../../models/cart-product.model';
import { ProductsService } from 'src/app/product/servises/products-service.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, OnDestroy, OnChanges {
  totalQuantity = 0;
  private cartSubscription!: Subscription;

  @Input()
  cartProducts!: Array<ICartProduct>;
  totalPrice = 0;

  constructor(
    public cartService: CartService,
    public productService: ProductsService) { }


  ngOnInit(): void {
    this.cartProducts = this.cartService.getProducts();
    // this.cartSubscription = this.cartService.buttonClick$.subscribe((product: ICartProduct) => {
    //   this.totalPrice += product.product.price;
    //   this.totalQuantity++;
    // });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cartProducts']) {
      this.totalPrice = this.cartProducts.reduce((total, product) => total + product.product.price, 0);
    }
  }


  ngOnDestroy(): void {
    console.log('Cart component destroyed.');
    this.cartSubscription.unsubscribe();
  }

  removeItemFromCart(product: ICartProduct) {
    this.cartService.removeFromCart(product);
    this.cartProducts = this.cartService.getProducts();
  }

  removeAll() {
    this.cartService.removeAll();
    this.cartProducts = this.cartService.getProducts();
  }

  getTotalCount() {
    return this.cartService.getProducts().reduce((a, b) => a + b.quantity, 0);
  }
  getTotalPrice() {
    return this.cartService.getProducts().reduce((a, b) => a + b.product.price * b.quantity, 0);
  }

  trackBy(index: number, product: ICartProduct) {
    return product.cart_id;
  }
}
