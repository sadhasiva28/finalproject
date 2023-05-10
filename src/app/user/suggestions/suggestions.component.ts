import { Component } from '@angular/core';
import { SugService } from 'src/app/services/sug.service';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent {
  suglist:any[] = [];
  forumlist:any;
  form:any;
  question:any;
  constructor(private hs:SugService){

    this.hs.getsuggestions().subscribe({
      next:(data:any)=>{
        this.suglist=data;
      },
      error:()=>this.suglist=[]
    })

  }
  AddQuestion(){
    var f:any={
      id:this.suglist.length+1,
      question:this.question,
      comments:[]
    }
    this.hs.postforum(f).subscribe(
      {
        next:(f:any)=>{
          alert("question posted successfully");
          location.reload();
        },
        error:(error)=>alert("not posted")
      }
    )
  }


}
