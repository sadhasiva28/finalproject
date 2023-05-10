import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainBarComponent } from './home/main-bar/main-bar.component';
import { HomeComponent } from './home/home.component';
import { DietComponent } from './diet/diet.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { PlanComponent } from './plan/plan.component';
import { ForumComponent } from './forum/forum.component';
import { HomeClickComponent } from './home/home-click/home-click.component';
import { DietClickComponent } from './diet/diet-click/diet-click.component';
import { SugClickComponent } from './suggestions/sug-click/sug-click.component';
import { ForumClickComponent } from './forum/forum-click/forum-click.component';

const routes: Routes = [
  {
    path:"",component:MainBarComponent,
    children: [
      {path:"",component:HomeComponent},
      {path: "diet",component:DietComponent},
      {path: "suggestions",component:SuggestionsComponent},
      {path:"plan",component:PlanComponent},
      {path:"form",component:ForumComponent},
      { path: 'details/:id', component:HomeClickComponent },
      { path: 'diet-click/:id', component:DietClickComponent },
      { path: 'sug-click/:id', component:SugClickComponent },
      { path: 'forum-click/:id', component:ForumClickComponent },
      
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
