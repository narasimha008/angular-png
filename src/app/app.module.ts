import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IvestNavigationComponent } from './ivest-navigation/ivest-navigation.component';
import { IvestDashboardComponent } from './ivest-dashboard/ivest-dashboard.component';
import { IvestVehicleElectronicsComponent } from './ivest-vehicle-electronics/ivest-vehicle-electronics.component';
import { IvestTruckdataComponent } from './ivest-truckdata/ivest-truckdata.component';
import {PanelMenuModule} from 'primeng/panelmenu';
import { IvestTpmsWheelIdComponent } from './ivest-tpms-wheel-id/ivest-tpms-wheel-id.component';

@NgModule({
  declarations: [
    AppComponent,
    IvestNavigationComponent,
    IvestDashboardComponent,
    IvestVehicleElectronicsComponent,
    IvestTruckdataComponent,
    IvestTpmsWheelIdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    PanelMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
