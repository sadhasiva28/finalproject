import { Component } from '@angular/core';
import { AdminResService } from 'src/app/services/admin-res.service';

@Component({
  selector: 'app-add-responses',
  templateUrl: './add-responses.component.html',
  styleUrls: ['./add-responses.component.css']
})
export class AddResponsesComponent {
  forumlist:any;
  id:any;
  forum:any;
  data:any;
  constructor(private hs:AdminResService){

    this.hs.getforum().subscribe({
      next:(data:any)=>this.forumlist=data,
      error:()=>this.forumlist=[]
    }

    )
  }


}
