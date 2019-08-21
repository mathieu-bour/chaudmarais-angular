import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpdDialogComponent } from './grpd-dialog.component';

describe('GrpdDialogComponent', () => {
  let component: GrpdDialogComponent;
  let fixture: ComponentFixture<GrpdDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrpdDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpdDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
