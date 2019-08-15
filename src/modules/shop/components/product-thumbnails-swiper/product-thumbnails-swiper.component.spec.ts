import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductThumbnailsSwiperComponent } from './product-thumbnails-swiper.component';

describe('ProductThumbnailsSwiperComponent', () => {
  let component: ProductThumbnailsSwiperComponent;
  let fixture: ComponentFixture<ProductThumbnailsSwiperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductThumbnailsSwiperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductThumbnailsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
