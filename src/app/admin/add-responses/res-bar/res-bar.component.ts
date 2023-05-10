import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-res-bar',
  templateUrl: './res-bar.component.html',
  styleUrls: ['./res-bar.component.css']
})
export class ResBarComponent {
@Input() forum:any;
}
