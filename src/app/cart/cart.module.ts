import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from 'src/app/cart/components/cart-list/cart-list.component'
import { CartItemComponent } from 'src/app/cart/components/cart-component/cart.component';
import { CartService } from './servises/cart.service';

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CartItemComponent,
    CartListComponent],
  providers: [CartService],
})
export class CartModule { }
