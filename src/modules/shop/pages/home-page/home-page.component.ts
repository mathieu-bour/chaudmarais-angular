import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Product} from '../../../api/models/product';
import {IndexProducts} from '../../../api/states/products/products.actions';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Select(state => state.products) products$: Observable<Product[]>;
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new IndexProducts(0, 100));
  }
}
