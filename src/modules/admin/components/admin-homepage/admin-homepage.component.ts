import {Component, OnInit, ViewChild} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Product} from '../../../api/models/product';
import {IndexProducts} from '../../../api/states/products/products.actions';
import {MatSidenav} from '@angular/material';


@Component({
  selector: 'app-admin-homepage',
  templateUrl: './admin-homepage.component.html',
  styleUrls: ['./admin-homepage.component.scss']
})
export class AdminHomepageComponent implements OnInit {
  @Select(state => state.products) products$: Observable<Product[]>;
  @ViewChild('sidenav', {static: true}) sidenav: MatSidenav;
  @ViewChild('navigationnav', {static: true}) navigationnav: MatSidenav;
  open = false;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new IndexProducts(0, 100));
  }

  async openEditView() {
    this.open = true;
  }

}
