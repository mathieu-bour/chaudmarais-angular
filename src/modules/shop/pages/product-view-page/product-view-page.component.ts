import {Component, OnInit} from '@angular/core';
import {Product} from '../../../api/models/product';
import {Stock} from '../../../api/models/stock';
import {Select, Store} from '@ngxs/store';
import {AddToCart, GetProductStocks, SetCurrentProductId, SetCurrentStockId} from '../../states/shop/shop.actions';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {
  @Select(store => store.shop.currentProduct) product$: Observable<Product>;
  @Select(store => store.shop.currentProductStocks) stocks$: Observable<Stock[]>;
  @Select(store => store.shop.currentStock) stock$: Observable<Stock>;

  imageIndex = 0;
  frozen = false;
  stockValues: { label: string, value: Stock }[] = [];

  constructor(private route: ActivatedRoute, private store: Store) {
  }

  async ngOnInit() {
    const slugId = this.route.snapshot.paramMap.get('slugId');
    const results = slugId.match(/([a-z\-]+)-([1-9]\d*)/);
    const id = +results[2];

    await this.store.dispatch([
      new GetProductStocks(id),
    ]).toPromise();
    await this.store.dispatch([
      new SetCurrentProductId(id)
    ]).toPromise();

    this.stocks$.pipe(first()).toPromise().then((firstStocks) => {
      if (firstStocks.length > 0) {
        this.store.dispatch(new SetCurrentStockId(firstStocks[0].id));
        this.stockValues = firstStocks.map(s => {
          return {
            label: s.size,
            value: s
          };
        });
      }
    });
  }

  async onSizeChange(stock: Stock) {
    await this.store.dispatch(new SetCurrentStockId(stock.id));
    this.frozen = false;
  }

  onAddToCart() {
    if (this.frozen) {
      return;
    }

    this.store
      .dispatch(new AddToCart(
        this.store.snapshot().shop.currentStock,
        this.store.snapshot().shop.currentProduct
      ))
      .toPromise()
      .then(() => this.frozen = true);
  }
}
