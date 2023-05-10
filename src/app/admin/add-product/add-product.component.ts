import { Component, OnInit } from '@angular/core';
import { AddProService } from 'src/app/services/add-pro.service';
import { MatDialog } from '@angular/material/dialog';

export type product={
  name:string;
  image:string;
}

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
  providers:[]
})
export class AddProductComponent implements OnInit {
  servicelist: any;
  filteredlist: any;
  types: string[] = [
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
  ];
  selected: string = "All";
  searchvalue: string = "";

  constructor(private hs: AddProService) { }

  ngOnInit(): void {
    this.hs.getproducts().subscribe({
      next: (data: any) => {
        this.servicelist = data;
        this.filteredlist = this.servicelist;
      },
      error: () => this.servicelist = []
    });
  }

  filterProducts() {
    if (this.selected === "All") {
      this.filteredlist = this.servicelist;
    } else {
      this.filteredlist = this.servicelist.filter((product:any) => product.type === this.selected);
    }
    if (this.searchvalue !== "") {
      this.filteredlist = this.filteredlist.filter((product:any) => product.name.toLowerCase().includes(this.searchvalue.toLowerCase()));
    }
  }
}
