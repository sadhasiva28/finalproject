import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminResService } from 'src/app/services/admin-res.service';

@Component({
  selector: 'app-res-click',
  templateUrl: './res-click.component.html',
  styleUrls: ['./res-click.component.css']
})
export class ResClickComponent {

  id:any;
  forum:any = {responses: []};
  query:any;
  response:any;
  forumdata:any;
 constructor(private hs:AdminResService,private ar:ActivatedRoute){
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
    this.hs.postadminres(this.forumdata).subscribe({
      next: (data: any) => {
        alert("response added successfully");
        location.reload();
      },
      error: (error) => alert("failed to add response")
    });
  }
}

}
