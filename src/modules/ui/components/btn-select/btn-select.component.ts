import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-btn-select',
  templateUrl: './btn-select.component.html',
  styleUrls: ['./btn-select.component.scss']
})
export class BtnSelectComponent implements OnInit {
  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() showLabel = true;
  @Input() values: [{ label: string, value: any }];
  @Output() valueChange = new EventEmitter<any>();

  label: string;

  private valueInternal: any = null;

  ngOnInit() {
    this.setLabel();

    if (this.valueInternal === null) {
      this.valueInternal = this.values[0].value;
    }
  }

  @Input()
  get value() {
    return this.valueInternal;
  }

  set value(newValue) {
    this.valueInternal = newValue;
    this.valueChange.emit(this.valueInternal);
    this.setLabel();
  }

  setLabel() {
    if (this.valueInternal !== null) {
      this.label = this.values
        .find(v => JSON.stringify(v.value) === JSON.stringify(this.valueInternal))
        .label;
    }
  }
}
