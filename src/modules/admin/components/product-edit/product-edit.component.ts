import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Product} from '../../../api/models/product';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-product-edit-component',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  @Input() productID: number;
  product$: Observable<Product>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.product$ = this.store.selectOnce((state => state.products.find(p => p.id === this.productID)));
  }

}
