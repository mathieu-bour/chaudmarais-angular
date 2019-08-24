import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  @Select(store => store.admin.editingProduct !== null) $isEditingProduct: Observable<boolean>;
  @Select(store => store.admin.editingStocks !== null) $isEditingStocks: Observable<boolean>;

  ngOnInit(): void {
  }
}
