import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngxs/store';
import {PatchProduct} from '../../../api/states/products/products.actions';
import {EditProduct, LoadProducts} from '../../states/admin/admin.actions';
import {MatSnackBar} from '@angular/material/snack-bar';

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

  constructor(private fb: FormBuilder, private snackBar: MatSnackBar, private store: Store) {
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

  async confirmEdition() {
    await this.store.dispatch(new PatchProduct(this.productFormGroup.value)).toPromise();
    this.snackBar.open('Produit enregistré');
    await this.store.dispatch(new EditProduct(null)).toPromise();
    this.store.dispatch(new LoadProducts(0, 100));
  }

  cancelEdition() {
    this.store.dispatch(new EditProduct(null));
  }
}
