import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public active:boolean;

  constructor() {
    this.active = false;
  }

  ngOnInit(): void {
  }

  displayOptions = () => {
    this.active = !this.active;
  }

}
