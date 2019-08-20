import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-two-layout',
  templateUrl: './two-layout.component.html',
  styleUrls: ['./two-layout.component.scss']
})
export class TwoLayoutComponent implements OnInit {
  @Input() title: string;
  @Input() width: string | number = 70;
  @Input() leftWidth: string | number = 50;

  ngOnInit() {
    if (typeof this.width !== 'string') {
      this.width = `${this.width}%`;
    }
    if (typeof this.leftWidth !== 'string') {
      this.leftWidth = `${this.leftWidth}%`;
    }
  }
}
