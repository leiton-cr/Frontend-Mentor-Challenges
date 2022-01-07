import { ShortenerService } from './../../../../shared/services/shortener.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortener-result',
  templateUrl: './shortener-result.component.html',
  styleUrls: ['./shortener-result.component.scss']
})
export class ShortenerResultComponent implements OnInit {

  constructor( public service:ShortenerService ) { }

  ngOnInit(): void {
  }

}
