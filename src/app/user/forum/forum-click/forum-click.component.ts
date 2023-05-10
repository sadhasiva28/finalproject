import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-click',
  templateUrl: './forum-click.component.html',
  styleUrls: ['./forum-click.component.css']
})
export class ForumClickComponent {
  id:any;
  forum:any = {responses: []};
  query:any;
  response:any;
  forumdata:any;
 constructor(private hs:ForumService,private ar:ActivatedRoute){
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

    this.hs.getforumById(this.id).subscribe({
       next: (data:any)=> this.forumdata=data,
       error: ()=> this.forumdata= {}
    })
 }
 addquery(res: string) {
  if (this.forumdata && this.forumdata.comments) {
    this.forumdata.comments.push(res);
    this.hs.postforumget(this.forumdata).subscribe({
      next: (data: any) => {
        alert("response added successfully");
        location.reload();
      },
      error: (error) => alert("failed to add response")
    });
  }
}
}