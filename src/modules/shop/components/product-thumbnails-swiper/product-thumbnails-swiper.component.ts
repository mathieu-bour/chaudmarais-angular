import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-product-thumbnails-swiper',
  templateUrl: './product-thumbnails-swiper.component.html',
  styleUrls: ['./product-thumbnails-swiper.component.scss']
})
export class ProductThumbnailsSwiperComponent implements OnInit {
  @Input() images: string[];
  @Output() imageIndex = new EventEmitter<number>();

  constructor() {
  }

  ngOnInit() {
  }

  onClick(imageIndex: number) {
    this.imageIndex.emit(imageIndex);
  }
}
