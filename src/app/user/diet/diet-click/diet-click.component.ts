import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService} from 'src/app/services/diet.service';

@Component({
  selector: 'app-diet-click',
  templateUrl: './diet-click.component.html',
  styleUrls: ['./diet-click.component.css']
})
export class DietClickComponent {
  id:any;
  diet:any;
 constructor(private hs:DietService,private ar:ActivatedRoute){
    this.ar.params.subscribe(
      {
        next: (params: { [x: string]: any; })=>{ 
         this.id =params['id']
         this.readData()
        },
        error: () => this.id = 0
      }
    )
 }

 readData(){

    this.hs.getdietById(this.id).subscribe({
       next: (data:any)=> this.diet=data,
       error: ()=> this.diet= {}
    })
 }

}
