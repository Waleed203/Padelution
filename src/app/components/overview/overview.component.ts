import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, inject, Input, OnInit, ViewChild } from '@angular/core';
import { addIcons } from 'ionicons';
import { add, chevronDown, chevronUpCircle, logoChrome, logoReact, navigate } from 'ionicons/icons';
import { EventComponent } from '../event/event.component';
import { MatchComponentComponent } from '../match-component/match-component.component';
import { EventService } from 'src/app/services/event.service';
import { AdbannerComponent } from '../adbanner/adbanner.component';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, MatchComponentComponent, EventComponent, AdbannerComponent]
})

export class OverviewComponent implements OnInit {
  activeIndex = 0;
  @Input() events:any = [];
  @ViewChild('swiper1') swiperRef1: ElementRef | undefined;

  slider_images = [
    {
      id: 0,
      image: './assets/imgs/one.jpeg',
      title: 'Inspirational Quotes',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 1,
      image: './assets/imgs/two.jpeg',
      title: 'Inspirational Quotes',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 2,
      image: './assets/imgs/three.png',
      title: 'Inspirational Quotes',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    },
    {
      id: 3,
      image: './assets/imgs/one.jpeg',
      title: 'Inspirational Quotes',
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
    }
  ]

  matches = [
    {
      'match_title': 'Cupra Finnish Padel Tour #3 KUOPIO + Kansalliset kilpailut MC/NC - Miehet FPT',
      'desc': 'Miehet FPT',
      'location': 'Padel Sawo ry, Finland',
      'teams': ['Heikki Lampinen', 'Robi Ylänkö', 'Masi Sarpola', 'Immo Laukkanen'],
      'scheduledAt': '3.7.2024, 14:30',
      'padel_location': 'Court North 1'
    },
    
    {
      'match_title': 'Mix Match',
      'desc': '',
      'location': '',
      'teams': ['Heikki Lampinen', 'Robi Ylänkö', 'Masi Sarpola', 'Immo Laukkanen'],
      'scheduledAt': '3.7.2024, 14:30',
      'padel_location': 'Court North 1'
    },
  ];

  banner:any = './assets/imgs/adbanner.png';

  youMightLike = [
    {
      id: 0,
      image: './assets/icon/trophy.svg',
      title: 'Boost Padel League',
      desc: "Boost Sports Club",
    },
    {
      id: 1,
      image: './assets/icon/trophy.svg',
      title: 'Boost Padel League',
      desc: "Boost Sports Club",
    },
    {
      id: 2,
      image: './assets/icon/trophy.svg',
      title: 'Boost Padel League',
      desc: "Boost Sports Club",
    },
    {
      id: 3,
      image: './assets/icon/trophy.svg',
      title: 'Boost Padel League',
      desc: "Boost Sports Club",
    },
    {
      id: 4,
      image: './assets/icon/trophy.svg',
      title: 'Boost Padel League',
      desc: "Boost Sports Club",
    }
  ]

  constructor(
  ) {
    addIcons({ add, navigate, chevronUpCircle, chevronDown });
  }

  onSlideChange() {
    console.log('swiper = ', this.swiperRef1!.nativeElement.swiper.activeIndex);
  }

  ngOnInit() {
  }

}
