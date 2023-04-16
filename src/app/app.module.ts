import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/components/products-list/product-component/product.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductsListComponent } from './product/components/products-list/products-list.component';
import { ProductsService } from 'src/app/product/servises/products-service.service';
import { CartListComponent } from 'src/app/cart/components/cart-list/cart-list.component'
import { CartComponent } from './cart/components/cart-list/cart-component/cart/cart.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsListComponent,
    CartListComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
