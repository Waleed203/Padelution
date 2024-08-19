import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class PlayersComponent  implements OnInit {
  @Input() players:any = [];

  constructor() { }

  ngOnInit() {}

}
