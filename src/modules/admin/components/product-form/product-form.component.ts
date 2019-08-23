import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngxs/store';
import {PatchProduct} from '../../../api/states/products/products.actions';
import {EditProduct} from '../../states/admin/admin.actions';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit, OnDestroy {
  productFormGroup = this.fb.group({
    id: [''],
    enabled: [true],
    name: [''],
    slug: [''],
    type: [''],
    description: [''],
    image_first: [''],
    images: [[]],
    order: [0]
  });

  constructor(private store: Store, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.store.selectOnce(s => s.admin.editingProduct).subscribe((product) => {
      const {id, enabled, name, slug, type, description, image_first, images, order} = product;
      const data = {id, enabled, name, slug, type, description, image_first, images, order};
      this.productFormGroup.setValue(data);
    });
  }

  ngOnDestroy() {
    delete this.productFormGroup;
  }

  confirmEdition() {
    this.store.dispatch(new PatchProduct(this.productFormGroup.value));
  }

  cancelEdition() {
    this.store.dispatch(new EditProduct(null));
  }
}
