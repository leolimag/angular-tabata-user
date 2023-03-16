import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
  imports: [FormsModule],
  standalone: true,
})
export class CounterComponent implements OnInit {
  cycles: number = 1;
  valueC: number;
  valueA: number;
  valueD: number;
  time: number;
  timer: number;
  state: boolean = true;

  constructor() {}

  ngOnInit() {}

  startTimer() {
    this.time = this.valueA;
    this.timer = setInterval(() => {
      if (this.cycles == this.valueC + 1) {
        this.clearTimer();
      }
      if (this.time >= 1) {
        this.time--;
        if (this.time == 0) {
          if (this.state == true) {
            this.time = this.valueD;
            this.state = false;
          } else {
            this.time = this.valueA;
            this.state = true;
            this.cycles++;
          }
        }
      }
    }, 300);
  }

  stopTimer() {
    clearInterval(this.timer);
  }

  clearTimer() {
    this.time = this.valueA;
    this.cycles = 1;
    clearInterval(this.timer);
  }
}
