import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvestNavigationComponent } from './ivest-navigation.component';

describe('IvestNavigationComponent', () => {
  let component: IvestNavigationComponent;
  let fixture: ComponentFixture<IvestNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvestNavigationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IvestNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
