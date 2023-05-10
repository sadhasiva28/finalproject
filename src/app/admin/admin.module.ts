import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductComponent } from './add-product/add-product.component';
import { AddResponsesComponent } from './add-responses/add-responses.component';
import { MaterialModule } from '../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { ResBarComponent } from './add-responses/res-bar/res-bar.component';
import { ResClickComponent } from './add-responses/res-click/res-click.component';
import { UserRoutingModule } from '../user/user-routing.module';
import { RouterModule } from '@angular/router';
import { AddBarComponent } from './add-product/add-bar/add-bar.component';


@NgModule({
  declarations: [
    AddProductComponent,
    AddResponsesComponent,
    AdminBarComponent,
    ResBarComponent,
    ResClickComponent,
    AddBarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    UserRoutingModule,
    ReactiveFormsModule,
    RouterModule

  ]
})
export class AdminModule { }
