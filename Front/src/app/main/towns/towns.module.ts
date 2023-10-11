import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TownsRoutingModule } from './towns-routing.module';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { TownsHomeComponent } from './towns-home/towns-home.component';


@NgModule({
  declarations: [TownsHomeComponent],
  imports: [
    CommonModule,
    TownsRoutingModule,
    OntimizeWebModule
  ]
})
export class TownsModule { }
