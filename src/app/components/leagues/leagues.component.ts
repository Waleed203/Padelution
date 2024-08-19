import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-leagues',
  templateUrl: './leagues.component.html',
  styleUrls: ['./leagues.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class LeaguesComponent  implements OnInit {
  @Input() leagues:any = [];

  constructor() { }

  ngOnInit() {
    console.log('leagues log = ', this.leagues);
  }

}
