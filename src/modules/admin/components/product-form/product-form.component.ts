import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {Store} from '@ngxs/store';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  productFormGroup = this.fb.group({
    enabled: [true],
    name: [''],
    slug: [''],
    description: [''],
    image_first: [''],
    images: [[]],
    order: [0]
  });

  constructor(private store: Store, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.store.selectOnce(s => s.admin.editingProduct).subscribe((product) => {
      const {enabled, name, slug, description, image_first, images, order} = product;
      const data = {enabled, name, slug, description, image_first, images, order};
      this.productFormGroup.setValue(data);
    });
  }
}
