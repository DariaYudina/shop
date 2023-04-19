import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from 'src/app/product/components/products-list/products-list.component';
import { ProductComponent } from './components/product-component/product.component';
import { ProductsService } from 'src/app/product/servises/products-service.service';

@NgModule({
  declarations: [
    ProductComponent,
    ProductsListComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductsListComponent],
    providers: [ProductsService],
})
export class ProductModule { }

