import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestDashboardComponent } from './ivest-dashboard.component';

describe('IvestDashboardComponent', () => {
  let component: IvestDashboardComponent;
  let fixture: ComponentFixture<IvestDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvestDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvestDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
