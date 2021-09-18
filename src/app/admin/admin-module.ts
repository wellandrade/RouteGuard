import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { RouterModule } from "@angular/router";

import { AddProductComponent } from "./add-product/add-product.component";
import { AddUserComponent } from "./add-user/add-user.component";
import { AdminRoutingModule } from "./admin-routing.module";
import { ConfirmDialogComponent } from "./confirm-dialog/confirm-dialog.component";
import { ListComponent } from "./list/list.component";
import { WelcomeComponent } from "./welcome/welcome.component";

@NgModule({
  declarations: [
      WelcomeComponent,
      AddUserComponent,
      AddProductComponent,
      ListComponent,
      ConfirmDialogComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    RouterModule,
    MatDialogModule,
    AdminRoutingModule,
  ],
})
export class AdminModule { }
