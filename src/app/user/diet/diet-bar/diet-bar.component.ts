import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-diet-bar',
  templateUrl: './diet-bar.component.html',
  styleUrls: ['./diet-bar.component.css']
})
export class DietBarComponent {
  @Input() diet:any

}
