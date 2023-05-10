import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sug-bar',
  templateUrl: './sug-bar.component.html',
  styleUrls: ['./sug-bar.component.css']
})
export class SugBarComponent {
  @Input() suggestion:any;
}
