import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {map} from 'rxjs/operators';
import {Stock} from '../../../api/models/stock';
import {Observable} from 'rxjs';
import {CartItem} from '../../states/cart/cart.state.model';
import {GetProductStocks} from '../../../api/states/products/products.actions';
import {AddToCart, RemoveFromCart, SetCartQuantity} from '../../states/cart/cart.actions';

@Component({
  selector: 'app-cart-element',
  templateUrl: './cart-element.component.html',
  styleUrls: ['./cart-element.component.scss']
})
export class CartElementComponent implements OnInit {
  @Input() cartItem: CartItem;
  stocks$: Observable<Stock[]>;
  values: { label: string; value: Stock }[];
  ready = false;
  quantities: { label: string; value: number }[];

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.stocks$ = this.store.selectOnce(state => state.stocks)
      .pipe(
        map((allStocks: Stock[]) => {
            return allStocks.filter(s => s.product_id === this.cartItem.product.id);
          }
        )
      );

    this.stocks$.subscribe((stocks: Stock[]) => {
      this.ready = true;
      this.generateStocksValues();
      this.values = stocks.map(s => {
        return {
          label: s.size,
          value: s
        };
      });
    });

    this.store.dispatch(new GetProductStocks(this.cartItem.product.id));
  }

  generateStocksValues(): void {
    this.quantities = [];
    for (let i = 1; i <= this.cartItem.stock.available_inventory; i++) {
      this.quantities.push({label: i.toString(), value: i});
    }

  }

  async onStockChange(newStock: Stock) {
    if (this.ready && newStock.id !== this.cartItem.stock.id) {
      await this.store.dispatch([
        new AddToCart(newStock, this.cartItem.product),
        new RemoveFromCart(this.cartItem.stock),
      ]).toPromise();
      this.generateStocksValues();
    }

    return;
  }

  onQuantityChange(newQuantity: number) {
    this.generateStocksValues();
    if (this.ready && this.cartItem.quantity !== newQuantity) {
      this.store.dispatch(new SetCartQuantity(this.cartItem.stock, this.cartItem.product, newQuantity));
    }
  }
}
