import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TravelersRoutingModule } from './travelers-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TravelersHomeComponent } from './travelers-home/travelers-home.component';


@NgModule({
  declarations: [TravelersHomeComponent],
  imports: [
    CommonModule,
    TravelersRoutingModule,
    OntimizeWebModule
  ]
})
export class TravelersModule { }
