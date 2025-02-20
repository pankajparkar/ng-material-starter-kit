import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AddProductComponent } from './add-product.component';
import {MatSnackBarModule} from "@angular/material/snack-bar";

@NgModule({
  imports: [ReactiveFormsModule, MatFormFieldModule, MatInputModule, CommonModule, MatButtonModule, MatSnackBarModule],
  declarations: [AddProductComponent],
  providers: [],
  exports: [AddProductComponent]
})
export class AddProductComponentModule {
}
