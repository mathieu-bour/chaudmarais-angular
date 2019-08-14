import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoLayoutComponent } from './two-layout.component';

describe('TwoLayoutComponent', () => {
  let component: TwoLayoutComponent;
  let fixture: ComponentFixture<TwoLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
