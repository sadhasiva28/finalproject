import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-main-bar',
  templateUrl: './main-bar.component.html',
  styleUrls: ['./main-bar.component.css']
})
export class MainBarComponent {

  
constructor(private router:Router,private ar:ActivatedRoute){
}
diet(){
  this.router.navigate(['diet'],{relativeTo:this.ar})
}
suggestions(){
  this.router.navigate(['suggestions'],{relativeTo:this.ar})
}
plan(){
  this.router.navigate(['plan'],{relativeTo:this.ar})
}
form(){
  this.router.navigate(['form'],{relativeTo:this.ar})
}
logout(){
  this.router.navigate([""])
}
}
