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
import {InputTextModule} from 'primeng/inputtext';
import { IvestTpmsWheelIdComponent } from './ivest-tpms-wheel-id/ivest-tpms-wheel-id.component';
import { ReportTopComponent } from './report-top/report-top.component';
import { ReportBottomComponent } from './report-bottom/report-bottom.component';
import { FormsModule } from '@angular/forms';
import { TableModule } from "primeng/table";
import { ButtonModule } from "primeng/button";

@NgModule({
  declarations: [
    AppComponent,
    IvestNavigationComponent,
    IvestDashboardComponent,
    IvestVehicleElectronicsComponent,
    IvestTruckdataComponent,
    IvestTpmsWheelIdComponent,
    ReportTopComponent,
    ReportBottomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    PanelMenuModule,
    InputTextModule,
    TableModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
