import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Address} from '../../../api/models/address';
import {Select} from '@ngxs/store';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-address-selector',
  templateUrl: './address-selector.component.html',
  styleUrls: ['./address-selector.component.scss']
})
export class AddressSelectorComponent {
  @Select(store => store.checkout.loading) loading$: Observable<boolean>;

  @Input() addresses: Address[];
  @Output() valueChange = new EventEmitter<Address>();
  private addressInternal: Address;

  @Input()
  get value() {
    return this.addressInternal;
  }

  set value(newAddress: Address) {
    this.valueChange.emit(newAddress);
    this.addressInternal = newAddress;
  }
}
