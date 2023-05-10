import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { DietComponent } from './diet/diet.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import { PlanComponent } from './plan/plan.component';
import { ForumComponent } from './forum/forum.component';
import { MainBarComponent } from './home/main-bar/main-bar.component';
import { MaterialModule } from '../materials/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeClickComponent } from './home/home-click/home-click.component';
import { HomeBarComponent } from './home/home-bar/home-bar.component';
import { DietBarComponent } from './diet/diet-bar/diet-bar.component';
import { DietClickComponent } from './diet/diet-click/diet-click.component';
import { SugBarComponent } from './suggestions/sug-bar/sug-bar.component';
import { SugClickComponent } from './suggestions/sug-click/sug-click.component';
import { ForumBarComponent } from './forum/forum-bar/forum-bar.component';
import { ForumClickComponent } from './forum/forum-click/forum-click.component';
import { FilterPipe } from '../pipes/filter.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    HomeComponent,
    DietComponent,
    SuggestionsComponent,
    PlanComponent,
    ForumComponent,
    MainBarComponent,
    HomeClickComponent,
    HomeBarComponent,
    DietBarComponent,
    DietClickComponent,
    SugBarComponent,
    SugClickComponent,
    ForumBarComponent,
    ForumClickComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    DragDropModule
    

  ]
})
export class UserModule { }
