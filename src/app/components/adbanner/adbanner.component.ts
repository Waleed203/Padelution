import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-adbanner',
  templateUrl: './adbanner.component.html',
  styleUrls: ['./adbanner.component.scss'],
  standalone: true,
})
export class AdbannerComponent  implements OnInit {
  @Input() bannerImage:any = '';
  constructor() { }

  ngOnInit() {}

}
