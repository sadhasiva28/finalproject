import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SugService } from 'src/app/services/sug.service';

@Component({
  selector: 'app-sug-click',
  templateUrl: './sug-click.component.html',
  styleUrls: ['./sug-click.component.css']
})
export class SugClickComponent {
  id:any;
  sug:any;
 constructor(private hs:SugService,private ar:ActivatedRoute){
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

    this.hs.getsuggestionsById(this.id).subscribe({
       next: (data:any)=> this.sug=data,
       error: ()=> this.sug= {}
    })
 }

}
