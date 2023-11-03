import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelersRoutingModule } from './travelers-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TravelersHomeComponent } from './travelers-home/travelers-home.component';
import { TravelersDetailComponent } from './travelers-detail/travelers-detail.component';
import { TravelersReservationComponent } from './travelers-reservation/travelers-reservation.component';


@NgModule({
  declarations: [TravelersHomeComponent, TravelersDetailComponent, TravelersReservationComponent],
  imports: [
    CommonModule,
    TravelersRoutingModule,
    OntimizeWebModule
  ]
})
export class TravelersModule { }
