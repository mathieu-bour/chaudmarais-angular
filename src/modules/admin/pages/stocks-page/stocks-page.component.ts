import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Store} from '@ngxs/store';
import {GetProductStocks} from '../../../api/states/products/products.actions';
import {Observable, of} from 'rxjs';
import {Stock} from '../../../api/models/stock';

@Component({
  selector: 'app-stocks-page',
  templateUrl: './stocks-page.component.html',
  styleUrls: ['./stocks-page.component.scss']
})
export class StocksPageComponent implements OnInit {
  stocks$: Observable<Stock[]> = of([]);

  constructor(private route: ActivatedRoute, private store: Store) {
  }

  ngOnInit() {
    const productId = +this.route.snapshot.paramMap.get('productId');
    this.store.dispatch(new GetProductStocks(productId));
    this.stocks$ = this.store.select(store => store.stocks.filter(s => s.product_id === productId));
  }
}
