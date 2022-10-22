import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IvestDashboardComponent } from './ivest-dashboard/ivest-dashboard.component';
import { IvestTpmsWheelIdComponent } from './ivest-tpms-wheel-id/ivest-tpms-wheel-id.component';
import { IvestTruckdataComponent } from './ivest-truckdata/ivest-truckdata.component';
import { IvestVehicleElectronicsComponent } from './ivest-vehicle-electronics/ivest-vehicle-electronics.component';

const routes: Routes = [
  { path: 'dashboard', component: IvestDashboardComponent },
  { path: 've', component: IvestVehicleElectronicsComponent },
  { path: 'td', component: IvestTruckdataComponent },
  { path: 'twi', component: IvestTpmsWheelIdComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
