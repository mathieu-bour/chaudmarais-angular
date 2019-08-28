import {Component, OnInit} from '@angular/core';
import {Product} from '../../../api/models/product';
import {Stock} from '../../../api/models/stock';
import {Select, Store} from '@ngxs/store';
import {Observable} from 'rxjs';
import {filter, first, map} from 'rxjs/operators';
import {ActivatedRoute} from '@angular/router';
import {SetCurrentProductId, SetCurrentStockId} from '../../states/shop/shop.actions';
import {AddToCart} from '../../states/cart/cart.actions';
import {SEOService} from '../../../utils/services/seo.service';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {
  @Select(store => store.shop.currentProduct) currentProduct$: Observable<Product>;
  @Select(store => store.shop.currentProductStocks) currentStocks$: Observable<Stock[]>;
  @Select(store => store.shop.currentStock) currentStock$: Observable<Stock>;
  stockValues$: Observable<{ label: string, value: Stock }[]>;

  imageIndex = 0;
  frozen = false;

  constructor(private route: ActivatedRoute, private store: Store, private seo: SEOService) {
    this.stockValues$ = this.currentStocks$.pipe(map(stocks => {
      return stocks.map(s => {
        return {
          label: s.size,
          value: s
        };
      });
    }));
  }

  ngOnInit() {
    const slugId = this.route.snapshot.paramMap.get('slugId');
    const results = slugId.match(/([a-z\-]+)-([1-9]\d*)/);
    const id = +results[2];

    this.currentProduct$
      .pipe(
        filter(product => product !== null),
        first()
      )
      .subscribe(product => {
        this.seo.configureForProduct(product);
      });

    this.currentStocks$
      .pipe(
        filter((stocks) => stocks.length > 0),
        first()
      )
      .subscribe((firstStocks) => {
        this.store.dispatch(new SetCurrentStockId(firstStocks[0].id));
      });

    this.store.dispatch([
      new SetCurrentProductId(id)
    ]);
  }

  onSizeChange(stock: Stock) {
    if (stock) {
      this.store.dispatch(new SetCurrentStockId(stock.id))
        .pipe(first())
        .subscribe(() => this.frozen = false);
    }
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
      .pipe(first())
      .subscribe(() => this.frozen = true);
  }
}
