import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {FormBuilder} from '@angular/forms';
import {Stock} from '../../../api/models/stock';
import {PatchStock} from '../../../api/states/stocks/stocks.actions';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit, OnDestroy {
  @Input() stock: Stock;

  stocksFormGroup = this.fb.group({
    id: [null],
    price: [null],
    size: [''],
    inventory: [null],
    available_inventory: [null]
  });

  constructor(private snackBar: MatSnackBar, private store: Store, private fb: FormBuilder) {
  }

  ngOnInit() {
    const {id, price, size, inventory, available_inventory} = this.stock;
    const data = {id, price, size, inventory, available_inventory};
    this.stocksFormGroup.setValue({id, price, size, inventory, available_inventory});
  }

  ngOnDestroy() {
    delete this.stocksFormGroup;
  }

  async confirmEdition() {
    await this.store.dispatch(new PatchStock(this.stock.id, this.stocksFormGroup.value)).toPromise();
    this.snackBar.open('Stock mis à jour !');
  }
}
