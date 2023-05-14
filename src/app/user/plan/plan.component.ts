import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.css']
})
export class PlanComponent {

  
  fileteredlist:any;

  constructor(private hs: HomeService) {
    this.hs.getproducts().subscribe({
      next: (data: any) => {
        this.fileteredlist = data; 
      },
      error: () => {
        this.fileteredlist = [];
      }
    });
  }
  

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
