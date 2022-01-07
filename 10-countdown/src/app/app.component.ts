import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit{

  // Quantity of ms / time measure.
  private readonly milisecondsTime = {
    days: 86400000,
    hours: 3600000,
    minutes: 60000,
    seconds: 1000
  }

  private finalDate:Date;

  public days?:number; 
  public hours?:number;
  public minutes?:number;
  public seconds?:number;
  
  constructor(){
    this.finalDate = new Date(2022,8,8,12,0,0);
    this.setDate();
  }

  ngOnInit(): void {
    setInterval(this.setDate, 1000)
  }

  setDate = () => {
    // Get the actual date
    const now = new Date();
    // Calculate the diference in ms
    const diference = this.finalDate.getTime() - now.getTime();
    
    // Calculate acordint to every time measure.
    this.days = diference / (this.milisecondsTime.days)
    this.hours = (diference / (this.milisecondsTime.hours)) % 24
    this.minutes = (diference / (this.milisecondsTime.minutes)) % 60
    this.seconds = (diference / (this.milisecondsTime.seconds)) % 60
  }

}