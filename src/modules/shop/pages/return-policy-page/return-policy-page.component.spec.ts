import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPolicyPageComponent } from './return-policy-page.component';

describe('ReturnPolicyPageComponent', () => {
  let component: ReturnPolicyPageComponent;
  let fixture: ComponentFixture<ReturnPolicyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnPolicyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnPolicyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
