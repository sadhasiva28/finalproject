import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-forum-bar',
  templateUrl: './forum-bar.component.html',
  styleUrls: ['./forum-bar.component.css']
})
export class ForumBarComponent {
  @Input() forum:any

}
