import { Router } from '@angular/router';
import { PlanetService } from './../../services/planet.service';
import { Planet } from './../../models/Planet.interface';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {

  public checkbox: any;
  public actualPlanet: Planet | undefined;

  constructor(
      public service:PlanetService,
      private router:Router
    ) {
     
    }

  ngOnInit(): void {
    this.service.actualPlanet.subscribe((data) => {
      this.actualPlanet = data;
    })
  }

  onPlanetChange(planet:string){
    // Avoids opening the same route.
    if(this.service.planet && this.service.planet.class === planet) return

    setTimeout(() => {
      this.router.navigate(['/', 'details']);
    }, 2000);

   
    // Hide the menu.
    this.checkbox = document.getElementById("toggle-menu");
    this.checkbox.checked = false;

    this.service.alertChange(planet);
  }

  onSunChange(sun:string){
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 1000);
    this.service.alertChange(sun);
  }
}