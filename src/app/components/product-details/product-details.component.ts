import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductsService } from '../../services/products.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-product-details',
  styleUrls: ['./product-details.component.scss'],
  templateUrl: './product-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailsComponent {
  readonly product$: Observable<ProductModel> = this._productsService.get(+this.route.snapshot.params['id']);

  constructor(
    private _productsService: ProductsService,
    private route: ActivatedRoute) {
  }
}
