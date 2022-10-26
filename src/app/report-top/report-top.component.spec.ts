import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportTopComponent } from './report-top.component';

describe('ReportTopComponent', () => {
  let component: ReportTopComponent;
  let fixture: ComponentFixture<ReportTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
