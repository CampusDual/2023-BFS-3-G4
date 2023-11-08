import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelersHomeComponent } from './travelers-home/travelers-home.component';
import { TravelersDetailComponent } from './travelers-detail/travelers-detail.component';
import { TravelersReservationComponent } from './travelers-reservation/travelers-reservation.component';
import { TravelersReservationDetailComponent } from './travelers-reservation/travelers-reservation-detail/travelers-reservation-detail.component';


const routes: Routes = [
  {path:'', component:TravelersHomeComponent},
  {path:':id_client', component:TravelersDetailComponent},
  {path:'reservation/:id_client', component:TravelersReservationComponent},
  {path:'reservation/detail/:id_reservation', component:TravelersReservationDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelersRoutingModule { }
