import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-single-layout',
  templateUrl: './single-layout.component.html',
  styleUrls: ['./single-layout.component.scss']
})
export class SingleLayoutComponent implements OnInit {
  @Input() title: string;
  @Input() image: string;
  @Input() width: string | number = 70;

  ngOnInit() {
    if (typeof this.width !== 'string') {
      this.width = `${this.width}%`;
    }
  }
}
