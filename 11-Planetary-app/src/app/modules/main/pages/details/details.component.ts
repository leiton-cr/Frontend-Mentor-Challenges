import { PlanetService } from './../../../../shared/services/planet.service';
import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit, AfterViewInit {
  Object = Object;
  @Input() actualPlanet: any | undefined;

  public animator = { animTitle: '', animOverview: '', animButtons: '', animFacts: '', animPlanet: ''};

  private subsciptions: Array<Subscription>;

  public tab: 'overview' | 'structure' | 'geology';
  public selectedData!: { content: string };

  constructor(private service: PlanetService) {
    this.subsciptions = [];

    this.actualPlanet = service.planet;
    this.tab = 'overview';
  }

  ngAfterViewInit(): void {
    this.toggleAnimation(this.actualPlanet);
  }

  ngOnInit(): void {
    this.selectedData = this.actualPlanet![this.tab];

    const planetSubscription = this.service.actualPlanet.subscribe((data) => {
      // If the data is undefined destroy the subscriptions and redirect.
      if (!data) {
        this.subsciptions.forEach((s) => {
          s.unsubscribe();
        });

        this.animator =  { 
          animPlanet: 'disolve', 
          animTitle: '', 
          animOverview: '', 
          animButtons: '', 
          animFacts: ''};
      } else {
        this.selectedData = this.actualPlanet![this.tab];
        this.toggleAnimation(data);
      }
    });

    this.subsciptions.push(planetSubscription);
  }

  toggleAnimation(data: any){

    this.animator =  { 
      animPlanet: 'disolve', 
      animTitle: '', 
      animOverview: '', 
      animButtons: '', 
      animFacts: ''};

    setTimeout(() => {
      this.actualPlanet = data;
      this.animator =  { 
        animPlanet: '', 
        animTitle: 'float-in', 
        animOverview: 'float-in', 
        animButtons: 'float-in', 
        animFacts: 'float-in'
      };
    }, 500);
  }

  changeTab(nextTab: 'overview' | 'structure' | 'geology') {
    this.tab = nextTab;
    this.animator.animOverview= '';

    setTimeout(() => {
      this.selectedData = this.actualPlanet![this.tab];
      this.animator.animOverview= 'float-in';
    }, 400);

  }
}
