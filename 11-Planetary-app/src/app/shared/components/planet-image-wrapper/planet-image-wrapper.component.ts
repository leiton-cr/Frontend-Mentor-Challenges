import { Planet } from './../../models/Planet.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-planet-image-wrapper',
  templateUrl: './planet-image-wrapper.component.html',
  styleUrls: ['./planet-image-wrapper.component.scss'],
})
export class PlanetImageWrapperComponent implements OnInit {
  @Input() animPlanet!: string;
  @Input() actualPlanet!: Planet;

  constructor() { }

  ngOnInit(): void {}
}
