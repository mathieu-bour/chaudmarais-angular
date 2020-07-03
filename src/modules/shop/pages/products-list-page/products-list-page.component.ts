import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Product} from '../../../api/models/product';
import {IndexEnabledProducts} from '../../../api/states/products/products.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './products-list-page.component.html',
  styleUrls: ['./products-list-page.component.scss']
})
export class ProductsListPageComponent implements OnInit {
  @Select(state => state.products) products$: Observable<Product[]>;
  productsAides$ = this.products$.pipe(
    map((products) => products.filter(p => p.collection === 'aides'))
  );
  productsDefault$ = this.products$.pipe(
    map((products) => products.filter(p => p.collection === null))
  );

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new IndexEnabledProducts(0, 100));
  }
}
