import { Component } from '@angular/core';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.css']
})
export class ForumComponent {
  forumlist:any;
  id:any;
  forum:any;
  data:any;
  constructor(private hs:ForumService){

    this.hs.getforum().subscribe({
      next:(data:any)=>this.forumlist=data,
      error:()=>this.forumlist=[]
    }

    )
  }
  AddQuestion(){
    var f:any={
      id:this.forumlist.length+1,
      question:this.forum,
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
