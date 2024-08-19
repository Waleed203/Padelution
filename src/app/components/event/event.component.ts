import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
  standalone: true,
  imports: [CommonModule]
})

export class EventComponent  implements OnInit {
  @Input() events:any = [];
  @Input() section:string = "";
  populated: boolean = false;

  constructor() { }

  ngOnInit() { }

  ngOnChanges() {
    this.populated = true;
  }

}