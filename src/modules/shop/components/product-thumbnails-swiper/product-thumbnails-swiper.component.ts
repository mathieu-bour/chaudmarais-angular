import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-thumbnails-swiper',
  templateUrl: './product-thumbnails-swiper.component.html',
  styleUrls: ['./product-thumbnails-swiper.component.scss']
})
export class ProductThumbnailsSwiperComponent implements OnInit {
  @Input() productId: number;

  constructor() {
  }

  ngOnInit() {
  }

}
