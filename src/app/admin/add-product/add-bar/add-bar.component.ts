import { Component, Input } from '@angular/core';
import { AddProService } from 'src/app/services/add-pro.service';

@Component({
  selector: 'app-add-bar',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.css']
})
export class AddBarComponent {

  name: string = "";
  type: string = "";
  price: string = "";
  Food: string="";
  Measure: string = "";
  Grams: string = "";
  Calories: string = "";
  Protein: string = "";
  Fat: string = "";
  Fiber: string = "";
  Carbs: string = "";
  Category: string = "";
  image: string = "";
  description: string = "";
  quantity: string = "";
  errors: string[] = [];

  constructor(private ps:AddProService) {}

  submit() {
    console.log("Submitting form...");

    this.errors = [];

    if (this.name == undefined || this.name.length < 3) {
      this.errors.push("Product name should be greater than 3 characters");
    }
    if (this.type == undefined || this.type.length < 3) {
      this.errors.push("Type name should be greater than 3 characters");
    }
    if (this.price == undefined || this.price.length < 30) {
      this.errors.push("Price should be greater than 30 characters");
    }
    if (this.Food == undefined || this.Food.length < 30) {
      this.errors.push("Food name should be greater than 30 characters");
    }
    if (this.Measure == undefined || this.Measure.length < 1) {
      this.errors.push("Measure should be specified");
    }
    if (this.Grams == undefined || this.Grams.length < 1) {
      this.errors.push("Grams should be specified");
    }
    if (this.Calories == undefined || this.Calories.length < 1) {
      this.errors.push("Calories should be specified");
    }
    if (this.Protein == undefined || this.Protein.length < 1) {
      this.errors.push("Protein should be specified");
    }
    if (this.Fat == undefined || this.Fat.length < 1) {
      this.errors.push("Fat should be specified");
    }
    if (this.Fiber == undefined || this.Fiber.length < 1) {
      this.errors.push("Fiber should be specified");
    }
    if (this.Carbs == undefined || this.Carbs.length < 1) {
      this.errors.push("Carbs should be specified");
    }
    if (this.Category == undefined || this.Category.length < 1) {
      this.errors.push("Category should be specified");
    }
    if (this.image == undefined || this.image.length < 1) {
      this.errors.push("Image URL should be specified");
    }
    if (this.description == undefined || this.description.length < 1) {
      this.errors.push("Description should be specified");
    }
    if (this.quantity == undefined || this.quantity.length < 1) {
      this.errors.push("Quantity should be specified");
    }

    if (this.errors.length > 1) {

      let obj = {
        name: this.name,
        type: this.type,
        price: this.price,
        Food: this.Food,
        Measure: this.Measure,
        Grams: this.Grams,
        Calories: this.Calories,
        Protein: this.Protein,
        Fat: this.Fat,
        Fiber: this.Fiber,
        Carbs: this.Carbs,
        Category: this.Category,
        image: this.image,
        description: this.description,
        quantity: this.quantity
}
this.ps.postproducts(obj).subscribe({
next: () => {
alert("Your product has been added successfully");
this.name = "";
this.type = "";
this.price = "";
this.Food="";
this.Measure = "";
this.Grams = "";
this.Calories = "";
this.Protein = "";
this.Fat="";
this.Fiber = "";
this.Carbs = "";
this.Category = "";
this.image = "";
this.description="";
this.quantity = "";
},
error: () => {
alert("There was a problem adding your product");
}
 });

 }

}


}
