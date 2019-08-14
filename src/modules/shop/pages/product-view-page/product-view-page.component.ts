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

  expanded = false;
  size = 'm';

  constructor(private productsClient: ProductsClient) {
  }

  async ngOnInit() {
    this.productsClient.get(this.id).subscribe(response => this.product = response.data);
    this.stocks = (await this.productsClient.getStocks(this.id)).data;
  }

  onClick() {
    this.expanded = !this.expanded;
  }

  changeSize(val) {
    this.size = val;
  }

  addToCart() {
    return;
  }
}
