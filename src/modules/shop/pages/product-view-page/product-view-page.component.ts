import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {
  expanded = false;
  size = 'm';
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.expanded = !this.expanded;
  }

  changeSize(val) {
    this.size = val;
  }

  addToCart() {
    return;
  }
}
