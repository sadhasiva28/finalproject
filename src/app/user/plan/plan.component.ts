import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {

  productItems=[
    "pineapple",
    "carrot",
    "dry fruits",
    "chicken",
    "leafy vegetables",
    "orange",
    "onions",
    "Dry Fruit",
    "Protein",
    "Pasta",
    "Burger",
    "Japanese",
    "Indian",
    "Pizza",
    "British",
    "Mexican",
    "Thai",
    "Russian",
    "Leaf vegetable"
  ];

  createPlan=[
    "Apple",
    "banana",
    "carrot",
  ];

  items = ['product'];

  quantities: number[] = [];

  totalQuantity: number = 0;

  onDrop(event: CdkDragDrop<string[]>){
    if(event.previousContainer === event.container){
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else{
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  calculate() {
    this.totalQuantity = this.quantities.reduce((sum, quantity) => sum + (quantity || 0), 0);
  }
}
