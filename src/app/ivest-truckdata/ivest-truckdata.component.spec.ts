import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestTruckdataComponent } from './ivest-truckdata.component';

describe('IvestTruckdataComponent', () => {
  let component: IvestTruckdataComponent;
  let fixture: ComponentFixture<IvestTruckdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvestTruckdataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvestTruckdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
