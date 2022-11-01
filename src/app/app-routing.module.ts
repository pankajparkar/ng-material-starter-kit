import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { AddProductComponentModule } from './components/add-product/add-product.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent },
      { path: 'add-product', component: AddProductComponent }
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    AddProductComponentModule,
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
