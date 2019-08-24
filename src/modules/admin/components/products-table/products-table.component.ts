import {Component, OnInit} from '@angular/core';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {Product} from '../../../api/models/product';
import {EditProduct, EditStocks, LoadProducts} from '../../states/admin/admin.actions';
import {PageEvent} from '@angular/material';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements OnInit {
  @Select(store => store.admin.products) products$: Observable<Product[]>;
  @Select(store => store.admin.page) page$: Observable<number>;
  @Select(store => store.admin.perPage) perPage$: Observable<number>;
  @Select(store => store.admin.total) total$: Observable<number>;

  columns = ['id', 'name', 'price', 'actions'];

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadProducts(0, 100));
  }

  onPageChange($event: PageEvent) {
    this.store.dispatch(new LoadProducts($event.pageIndex, $event.pageSize));
  }

  onEdit($event: Product) {
    this.store.dispatch(new EditProduct($event));
  }

  onStockEdit($event: Product) {
    this.store.dispatch(new EditStocks($event.id));
  }
}
