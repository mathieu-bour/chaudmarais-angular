import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  @Select(store => store.admin.editingProduct !== null) $isEditingProduct: Observable<boolean>;

  ngOnInit(): void {
  }
}
