import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { AddProductComponentModule } from './components/add-product/add-product.component-module';
import { ProductDetailsComponentModule } from './components/product-details/product-details.component-module';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent },
      { path: 'add-product', component: AddProductComponent },
      { path: 'product/:id', component: ProductDetailsComponent },
      { path: '**', redirectTo: 'product' },
    ]),
    ProductListComponentModule,
    ProductsServiceModule,
    AddProductComponentModule,
    ProductDetailsComponentModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
