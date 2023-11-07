import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityHomeComponent } from './community-home/community-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';


@NgModule({
  declarations: [CommunityHomeComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    OntimizeWebModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CommunityModule { }
