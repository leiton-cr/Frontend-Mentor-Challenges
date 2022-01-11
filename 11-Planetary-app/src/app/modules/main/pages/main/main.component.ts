import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PlanetService } from './../../../../shared/services/planet.service';
import { Planet } from './../../../../shared/models/Planet.interface';
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit, AfterViewInit {
  public readonly astros = [
    'neptune',
    'uranus',
    'saturn',
    'jupiter',
    'mars',
    'earth',
    'venus',
    'mercury',
    'sun',
  ];

  public animation: string;

  private subsciptions: Array<Subscription>;
  public actualPlanet: Planet | undefined;
  public planetClosing: boolean;

  constructor(
    private service: PlanetService,
    private router: Router,
    private cd: ChangeDetectorRef
  ) {
    this.animation = '';

    this.planetClosing = false;
    this.subsciptions = [];
  }

  ngAfterViewInit(): void {
    this.toggleAnimation();
  }

  ngOnInit(): void {
    const planetSubscription = this.service.actualPlanet.subscribe((data) => {
      this.actualPlanet = undefined;

      if(data){
        this.toggleAnimation();
      }

      setTimeout(() => (this.actualPlanet = data), 0);
    });

    this.subsciptions.push(planetSubscription);
  }

  // Receives the event planet click
  onPlanetChange(planet: string) {
    if (planet === 'sun') return;
    this.service.alertChange(planet);
    this.navigateOut();
  }

  navigateOut() {
    setTimeout(() => {
      this.router.navigate(['/', 'details']);
    }, 1400);
  }

  toggleAnimation(){
    setTimeout(() => {
      this.animation = this.animation === 'cool_entrance' ? 'cool_exit' : "cool_entrance";
    }, 0);
  }
}

