import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBarComponent } from './admin-bar/admin-bar.component';
import { AddProductComponent } from './add-product/add-product.component';
import { AddResponsesComponent } from './add-responses/add-responses.component';
import { ResClickComponent } from './add-responses/res-click/res-click.component';
import { AddBarComponent } from './add-product/add-bar/add-bar.component';

const routes: Routes = [
  {
    path:"",component:AdminBarComponent,
    children: [
      {path:"",component:AddProductComponent},
      {path: "responses",component:AddResponsesComponent},
      { path:"res-click/:id", component:ResClickComponent },
      { path:"add-rou", component:AddBarComponent }
      
    ]
    }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
