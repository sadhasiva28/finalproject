import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home-bar',
  templateUrl: './home-bar.component.html',
  styleUrls: ['./home-bar.component.css']
})
export class HomeBarComponent {
  @Input() product:any;

}
