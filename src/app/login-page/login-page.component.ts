import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  users:any;
  constructor(private ls:LoginService,private router:Router){
    this.ls.getUsers().subscribe(
      {
        next:(data:any)=>this.users=data,
        error:()=>this.users=[]
      }
    )
  }
  username: any;
  password: any;
  email:string | undefined;
  hide = true;

  signin:boolean = true;
  signup:boolean = false;
  login(){
    this.signin = true;
    this.signup = false;
  }
register(){
  this.signin = false;
  this.signup = true;
}
l:boolean=false;
usertype:any;

UserCheck(){
var userfound = this.users.find((user:any) => user.username === this.username && user.password === this.password);
if (userfound){
  if(userfound.type == 'user'){
    alert("User login successfull")
    this.router.navigate(['user']);
  }
  else if (userfound.type==='admin'){
    alert("Admin login successfull")
    this.router.navigate(['admin']);
  }
}
else{
  alert("Wrong credentials ! Try again")
  location.reload();
}
}

registerUser(){
  var format:any={
    id:this.users.length+1,
    email:this.email,
    password:this.password,
    username:this.username,
    type:"user"
  }
  this.ls.registerUSer(format).subscribe(
    {
      next:(format:any)=>{
        alert("Registered Succesfully");
        location.reload();
      },
      error:(error)=>alert("Unable to Register")
    }
  )
}
}
