import { Component, OnInit } from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {GetProducts} from '../../states/shop/shop.actions';
import {Observable} from 'rxjs';
import {Product} from '../../../api/models/product';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  @Select(state => state.shop.products) products$: Observable<Product[]>;
  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetProducts(0, 100));
  }

}
