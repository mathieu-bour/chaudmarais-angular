import {Component, OnInit} from '@angular/core';
import {Product} from '../../../api/models/product';
import {Stock} from '../../../api/models/stock';
import {ProductsClient} from '../../../api/clients/products/products.client';

@Component({
  selector: 'app-product-view-page',
  templateUrl: './product-view-page.component.html',
  styleUrls: ['./product-view-page.component.scss']
})
export class ProductViewPageComponent implements OnInit {
  id = 1;

  product: Product;
  stocks: Stock[];
  currentStock: Stock;

  constructor(private productsClient: ProductsClient) {
  }

  ngOnInit() {
    this.productsClient.get(this.id).then((res) => {
      this.product = res.data;
    });

    this.productsClient.getStocks(this.id).then((res) => {
      this.stocks = res.data;
      this.currentStock = {...this.stocks[0]};
    });
  }

  addToCart() {
    return;
  }

  get euros() {
    return Math.floor(this.currentStock.price / 100);
  }

  get cents() {
    return this.currentStock.price % 100;
  }

  get stocksValues() {
    return this.stocks ? this.stocks.map(s => {
      return {
        label: s.size,
        value: s
      };
    }) : [];
  }
}
