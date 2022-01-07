import { ShortenerService } from './../../../../shared/services/shortener.service';
import { Shorteens } from './../../../../shared/interfaces/shorteens';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortened-element',
  templateUrl: './shortened-element.component.html',
  styleUrls: ['./shortened-element.component.scss'],
})
export class ShortenedElementComponent implements OnInit {
  @Input() element: Shorteens | undefined;

  constructor(public service:ShortenerService) {
    this.element = undefined;
  }

  ngOnInit(): void {}

  onCopy(){
    if(this.element?.shortened){
      navigator.clipboard.writeText(this.element?.shortened);
      this.service.lastCopy = this.element?.id;
    }
  }
}