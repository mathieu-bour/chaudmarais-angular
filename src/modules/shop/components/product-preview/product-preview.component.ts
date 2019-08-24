import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Product} from '../../../api/models/product';

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss']
})
export class ProductPreviewComponent implements OnInit {
  @Input() productId: number;
  product$: Observable<Product>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.product$ = this.store.selectOnce((state => state.products.find(p => p.id === this.productId)));
  }

}
