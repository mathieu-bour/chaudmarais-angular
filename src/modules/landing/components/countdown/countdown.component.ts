import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss']
})
export class CountdownComponent implements OnInit {
  private readonly DAY_SECONDS = 3600 * 24;
  private readonly HOUR_SECONDS = 3600;
  private readonly MINUTE_SECONDS = 60;

  @Input() endDate = new Date(2019, 8, 1, 0, 0, 0);

  days: number;
  hours: number;
  minutes: number;
  seconds: number;

  constructor() {
  }

  ngOnInit() {
    this.setCountdown();
    setInterval(() => {
      this.setCountdown();
    }, 500);
  }

  setCountdown() {
    let diffSeconds = Math.floor((this.endDate.getTime() - Date.now()) / 1000);

    this.days = Math.floor(diffSeconds / this.DAY_SECONDS);
    diffSeconds -= this.days * this.DAY_SECONDS;
    this.hours = Math.floor(diffSeconds / this.HOUR_SECONDS);
    diffSeconds -= this.hours * this.HOUR_SECONDS;
    this.minutes = Math.floor(diffSeconds / this.MINUTE_SECONDS);
    diffSeconds -= this.minutes * this.MINUTE_SECONDS;
    this.seconds = diffSeconds;
  }
}
