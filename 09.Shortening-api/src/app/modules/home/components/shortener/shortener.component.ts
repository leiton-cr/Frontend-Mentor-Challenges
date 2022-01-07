import { Shorteens } from './../../../../shared/interfaces/shorteens';
import { ShortenerService } from './../../../../shared/services/shortener.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-principal-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.scss'],
})
export class ShortenerComponent implements OnInit {

  public onProgress:boolean;
  public shortenedUrls: Array<Shorteens>;
  public inputUrl: string;
  private lastId:number;
  public inputError: { status: boolean; message: string };

  constructor(private service: ShortenerService) {
    this.onProgress = false;
    this.inputError = { status: false, message: '' };
    this.shortenedUrls = [];
    this.lastId = 0;
    this.inputUrl = '';
  }

  ngOnInit(): void {}

  validateURL():boolean {

    if (this.inputUrl === '') {
      this.inputError = {status:true, message:'Please add a link'};
      return this.inputError.status; 
    }

    if (this.inputUrl.length < 5) {
      this.inputError = {status:true, message:'Please add a full link'};
      return this.inputError.status; 
    }


    this.inputError = { status: false, message: '' };
    return this.inputError.status; 
  }

  doShorteen = async () => {
    if(this.validateURL()) return;

    this.onProgress = true;
    const response: any = await this.service.shorteen(this.inputUrl);

    if (response.status !== 'ok') {
      this.inputError = {status:true, message:'Error on link try again'};
      this.onProgress = false;
      return this.inputError.status; 
    }

    const newResult: Shorteens = {
      id: this.lastId,
      original: response.original,
      shortened: response.shortened,
    };

    this.lastId++;
    this.shortenedUrls.unshift(newResult);
    this.service.observer.next(this.shortenedUrls);
    this.inputUrl = '';
    this.onProgress = false;
    return
  };
}
