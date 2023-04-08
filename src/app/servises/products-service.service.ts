import { Injectable } from '@angular/core';
import { ProductComponent } from '../components/product/product.component';
const products = [
  new ProductComponent(),
  new ProductComponent(),
  new ProductComponent()
]

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  public getProducts(): Array<ProductComponent>{
    return products;
  }
}
