import { Component } from '@angular/core';
import { DietService } from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet',
  templateUrl: './diet.component.html',
  styleUrls: ['./diet.component.css']
})
export class DietComponent {
  dietlist:any;
  constructor(private hs:DietService){

    this.hs.getdiet().subscribe({
      next:(data:any)=>this.dietlist=data,
      error:()=>this.dietlist=[]
    }

    )
  }

}
