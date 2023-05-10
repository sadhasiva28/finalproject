import { Component } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  servicelist:any;
  fileteredlist:any;
  types:string[]=[
    "All",
    "fruit",
    "vegetable",
    "Dry Fruit",
    "Protein",
    "Pasta",
    "Burger",
    "Japanese",
    "Indian",
    "Pizza",
    "British",
    "Mexican",
    "Thai",
    "Russian",
    "Leaf vegetable",

  ]
  selected:string="All";
  searchvalue:string="";
  constructor(private hs:HomeService){
    this.hs.getproducts().subscribe({
      next:(data:any)=>{
        this.servicelist=data;
        this.fileteredlist = data; // initialize filtered list here
      },
      error:()=>{this.servicelist=[];
        this.fileteredlist=[];
      }
    });
  }
  
  filterProducts() {
    if (this.selected === "All") {
      this.fileteredlist = this.servicelist;
    } else {
      this.fileteredlist = this.servicelist.filter((product:any) => product.type === this.selected);
    }
    if (this.searchvalue !== "") {
      this.fileteredlist = this.fileteredlist.filter((product:any) => product.name.toLowerCase().includes(this.searchvalue.toLowerCase()));
    }
  }
  
    
    
    
    
    }


