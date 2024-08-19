import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { EventComponent } from '../event/event.component';
import { RankingsComponent } from '../rankings/rankings.component';
import { LeaguesComponent } from '../leagues/leagues.component';
import { PlayersComponent } from '../players/players.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [CommonModule, EventComponent, RankingsComponent, LeaguesComponent, PlayersComponent]
})
export class FavoritesComponent  implements OnInit {

  rankings = [
    {
      id: 0,
      name: 'Suomen Padelliitto',
      desc: 'Miehet'
    },
  ]
  
  leagues = [
    {
      id: 0,
      name: 'Kotone Sport Kesäliiga',
      desc: 'Kotone Sport'
    },
  ]
  
  players = [
    {
      id: 0,
      name: 'Heikki Lampinen',
      desc: 'Kotone Sport',
      country: 'Finland',
      age: '32y',
      score: '43'
    },
    {
      id: 1,
      name: 'Heikki Lampinen',
      desc: 'Kotone Sport',
      country: 'Finland',
      age: '32y',
      score: '43'
    },
  ]

  events = [
    {
      id: 0,
      title: 'Naisten viikkoliiga by Gant 17-19',
      location: 'Padel Uno, Lahti',
      date: '28.7.2024'
    },
    {
      id: 1,
      title: 'Naisten viikkoliiga by Gant 17-19',
      location: 'Padel Uno, Lahti',
      date: '28.7.2024'
    },
    {
      id: 2,
      title: 'Naisten viikkoliiga by Gant 17-19',
      location: 'Padel Uno, Lahti',
      date: '28.7.2024'
    },
    {
      id: 3,
      title: 'Naisten viikkoliiga by Gant 17-19',
      location: 'Padel Uno, Lahti',
      date: '28.7.2024'
    },
  ]

  constructor() { }

  ngOnInit() {}

}
