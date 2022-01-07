import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { MainComponent } from './main/main.component';
import { ShortenerComponent } from './components/shortener/shortener.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ShortenerResultComponent } from './components/shortener-result/shortener-result.component';
import { ShortenedElementComponent } from './components/shortened-element/shortened-element.component';


@NgModule({
  declarations: [
    MainComponent,
    ShortenerComponent,
    StatisticsComponent,
    ShortenerResultComponent,
    ShortenedElementComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class HomeModule { }
