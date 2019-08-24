import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {FormBuilder} from '@angular/forms';
import {ClearStocks} from '../../states/admin/admin.actions';

@Component({
  selector: 'app-stock-form',
  templateUrl: './stock-form.component.html',
  styleUrls: ['./stock-form.component.scss']
})
export class StockFormComponent implements OnInit, OnDestroy {
  StocksFormGroup = this.fb.group({
    s: [''],
    m: [''],
    l: ['']
  });

  constructor(private store: Store, private fb: FormBuilder) { }

  async ngOnInit() {
    const stocks = await this.store.selectOnce(s => s.admin.editingStocks);
  }

  ngOnDestroy() {
    delete this.StocksFormGroup;
  }

  cancelEdition() {
    this.store.dispatch(new ClearStocks());
  }
}
