import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestVehicleElectronicsComponent } from './ivest-vehicle-electronics.component';

describe('IvestVehicleElectronicsComponent', () => {
  let component: IvestVehicleElectronicsComponent;
  let fixture: ComponentFixture<IvestVehicleElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvestVehicleElectronicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvestVehicleElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
