import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-component',
  templateUrl: './match-component.component.html',
  styleUrls: ['./match-component.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MatchComponentComponent  implements OnInit {
  @Input() matches:any = [];

  constructor() { }

  ngOnInit() {
    console.log('component mount = ', this.matches);
  }

}
