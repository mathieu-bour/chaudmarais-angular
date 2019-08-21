import {AfterViewInit, Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';
import {ControlValueAccessor} from '@angular/forms';

@Component({
  selector: 'app-btn-select',
  templateUrl: './btn-select.component.html',
  styleUrls: ['./btn-select.component.scss']
})
export class BtnSelectComponent implements OnInit, AfterViewInit {
  @Input() placeholder: string;
  @Input() prefix: string;
  @Input() values: [{ label: string, value: any }];
  @Output() valueChange = new EventEmitter<any>();

  open = false;
  private label;

  private valueInternal: any;

  constructor(private renderer2: Renderer2, private elementRef: ElementRef<HTMLElement>) {
  }

  ngOnInit() {
    this.setLabel();
  }

  ngAfterViewInit(): void {
  }

  @Input()
  get value() {
    return this.valueInternal;
  }

  set value(newNgModel) {
    this.valueInternal = newNgModel;
    this.valueChange.emit(this.valueInternal);
    this.setLabel();
    this.open = false;
  }

  setLabel() {
    this.label = this.values
      .find(v => JSON.stringify(v.value) === JSON.stringify(this.valueInternal))
      .label;
  }

  toggle() {
    this.open = !this.open;
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    // Source: https://stackoverflow.com/q/50531212
    if (!this.open) {
      return;
    }

    const clickedInside = this.elementRef.nativeElement.contains(targetElement);

    if (!clickedInside) {
      this.open = false;
    }
  }
}
