import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { StarsComponent } from './components/stars/stars.component';
import { PlanetImageWrapperComponent } from './components/planet-image-wrapper/planet-image-wrapper.component';



@NgModule({
  declarations: [
    HeaderComponent,
    StarsComponent,
    PlanetImageWrapperComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    StarsComponent,
    PlanetImageWrapperComponent
  ]
})
export class SharedModule { }
