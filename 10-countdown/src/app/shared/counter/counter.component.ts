import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @Input() value: number | undefined;
  @Input() type!: "days" | "hours" | "minutes" | "seconds";
  constructor() {
    this.value = 0;
  }

  ngOnInit(): void {}
}