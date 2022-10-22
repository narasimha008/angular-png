import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestTpmsWheelIdComponent } from './ivest-tpms-wheel-id.component';

describe('IvestTpmsWheelIdComponent', () => {
  let component: IvestTpmsWheelIdComponent;
  let fixture: ComponentFixture<IvestTpmsWheelIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvestTpmsWheelIdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvestTpmsWheelIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
