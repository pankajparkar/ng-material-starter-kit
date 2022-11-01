import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarComponent } from './navbar.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [MatToolbarModule, MatButtonModule, RouterModule],
  declarations: [NavbarComponent],
  providers: [],
  exports: [NavbarComponent]
})
export class NavbarComponentModule {
}
