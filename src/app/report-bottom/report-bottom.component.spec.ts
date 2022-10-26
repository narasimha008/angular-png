import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportBottomComponent } from './report-bottom.component';

describe('ReportBottomComponent', () => {
  let component: ReportBottomComponent;
  let fixture: ComponentFixture<ReportBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
