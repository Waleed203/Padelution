import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class RankingsComponent  implements OnInit {
  @Input() rankings:any = [];

  constructor() { }

  ngOnInit() {
    console.log('rankings log = ', this.rankings);
  }

}
