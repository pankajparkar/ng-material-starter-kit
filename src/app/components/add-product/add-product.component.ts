import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

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

  constructor(
    private _productsService: ProductsService,
    private _router: Router,
    private snackbar: MatSnackBar,
  ) {
  }

  onAddProductFormSubmitted(addProductForm: FormGroup): void {
    this._productsService.create(addProductForm.value).subscribe({
      next: () => {
        this.snackbar.open('Product added successfully');
        this._router.navigate(['/products']);
      }
    });
  }
}
