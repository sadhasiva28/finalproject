import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-bar',
  templateUrl: './admin-bar.component.html',
  styleUrls: ['./admin-bar.component.css']
})
export class AdminBarComponent {
  constructor(private router:Router,private ar:ActivatedRoute){
  }
  responses(){
    this.router.navigate(['responses'],{relativeTo:this.ar})
  }
  logout(){
    this.router.navigate([""])
  }

  

}
