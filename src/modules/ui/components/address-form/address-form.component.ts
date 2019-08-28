import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Store} from '@ngxs/store';
import {Address} from '../../../api/models/address';
import {only} from '../../../../functions';
import {PatchAddress, PostAddress} from '../../../api/states/addresses/addresses.actions';

@Component({
  selector: 'app-address-form',
  templateUrl: './address-form.component.html',
  styleUrls: ['./address-form.component.scss']
})
export class AddressFormComponent implements OnInit {
  @Input() address: Address;
  @Output() submitted = new EventEmitter<void>();

  addressFormGroup = this.fb.group({
    name: ['', Validators.required],
    line1: ['', Validators.required],
    line2: [''],
    postal_code: ['', Validators.required],
    city: ['', Validators.required],
    country: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private store: Store) {
  }

  ngOnInit() {
    if (this.address) {
      this.addressFormGroup.setValue(only(this.address, Object.keys(this.addressFormGroup.value)));
    } else {
      this.addressFormGroup.patchValue({
        user_id: this.store.snapshot().auth.user.id
      });
    }
  }

  onSubmit() {
    if (!this.address || !this.address.hasOwnProperty('id')) {
      this.store.dispatch(new PostAddress(this.addressFormGroup.value));
    } else {
      this.store.dispatch(new PatchAddress(this.address.id, this.addressFormGroup.value));
    }
    this.submitted.emit();
    this.addressFormGroup.reset();
  }
}
