import {Component, ElementRef, inject, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {Router, RouterModule} from "@angular/router";
import {
  IonActionSheet,
  IonBackButton,
  IonButton,
  IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
  IonContent, IonFab, IonFabButton, IonFabList,
  IonHeader, IonIcon, IonLabel,
  IonTitle,
  IonToolbar, ModalController
} from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import {add, navigate, chevronUpCircle, chevronDown} from "ionicons/icons";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {EnterMatchResultsComponent} from "../components/enter-match-results/enter-match-results.component";
import {ChangeLocationComponent} from "../components/change-location/change-location.component";
import { MatchComponentComponent } from '../components/match-component/match-component.component';
import { EventComponent } from '../components/event/event.component';
import { OverviewComponent } from '../components/overview/overview.component';
import { FavoritesComponent } from '../components/favorites/favorites.component';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [ IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonFab, IonFabButton, IonFabList, IonActionSheet, IonHeader, IonToolbar, IonButtons, IonButton, IonLabel, IonIcon, IonTitle, IonContent, IonBackButton
    , CommonModule, FormsModule, RouterModule, OverviewComponent, FavoritesComponent],
})

export class HomePage implements OnInit {
  @ViewChild('page') page: ElementRef | undefined;
  selectedTab:string = 'overview';
  eventsService = inject(EventService);
  events:any = [];
  refresher:any = null;

  constructor(
    private router: Router,
    private modalController: ModalController,
    ) {
    addIcons({ add, navigate, chevronUpCircle, chevronDown });
  }

  segmentChanged(ev:any) {
    this.selectedTab = ev.detail.value;
    console.log('selected tab = ', this.selectedTab);
  }

  ngOnInit() {
    
  }
  
  handleRefresh(refresher:any) {
    this.refresher = refresher;
    this.fetchEvents(true);
  }

  ionViewWillEnter() {
    this.fetchEvents();
  }

  fetchEvents(force:boolean = false) {
    this.eventsService.getEvents({ sort: '-start_at' }, force).subscribe({
      next: (data) => {
      this.events = this.eventsService.formatEventData(data.data);
      console.log('events final = ', this.events);
      },
      error: (err) => {
        console.log(err);
      },
      complete:() => {
        if(this.refresher != null) {
          this.refresher?.target.complete();
        }
      }
    })
  }

  async openChangeLocationModal() {
    console.log(this.page || 'no page');
    const modal = await this.modalController.create({
      component: ChangeLocationComponent,
      componentProps: {
        // matchId: 123123,
      },
      presentingElement: this.page?.nativeElement,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log(data, role);
  }

  async openModal() {
    console.log(this.page || 'no page');
    const modal = await this.modalController.create({
      component: EnterMatchResultsComponent,
      componentProps: {
        matchId: 123123,
      },
      presentingElement: this.page?.nativeElement,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();
    console.log(data, role);
  }

}
