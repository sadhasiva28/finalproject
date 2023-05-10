import { Component  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeService } from 'src/app/services/home.service';

@Component({
  selector: 'app-home-click',
  templateUrl: './home-click.component.html',
  styleUrls: ['./home-click.component.css']
})
export class HomeClickComponent {
  id:any;
  product:any;
 constructor(private hs:HomeService,private ar:ActivatedRoute){
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

    this.hs.getproductById(this.id).subscribe({
       next: (data:any)=> this.product=data,
       error: ()=> this.product= {}
    })
 }


}
