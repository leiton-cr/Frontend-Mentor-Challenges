import { Planet } from './../models/Planet.interface';
import { Injectable } from '@angular/core';
import * as rawData from '../../../assets/data/planets.json';
import { BehaviorSubject, of } from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})

export class PlanetService {
  public planetaryData: Array<Planet>;
  public actualPlanet: BehaviorSubject<any>;
  public planet: any = undefined
  constructor() { 
    
    this.planetaryData = (rawData as any).default;
    this.actualPlanet = new BehaviorSubject(undefined);
  }

  alertChange(planet:String){
    this.planet = this.planetaryData.find((p) => p.class === planet);
    this.actualPlanet.next(this.planet);
  }

}
