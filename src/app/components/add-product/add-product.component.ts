import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-add-product',
  styleUrls: ['./add-product.component.scss'],
  templateUrl: './add-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddProductComponent {
  readonly addProductForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
  });

  constructor(private _productsService: ProductsService) {
  }

  onAddProductFormSubmitted(addProductForm: FormGroup): void {
    this._productsService.create(addProductForm.value).subscribe();
  }
}
