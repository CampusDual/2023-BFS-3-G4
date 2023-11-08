import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommunityRoutingModule } from './community-routing.module';
import { CommunityHomeComponent } from './community-home/community-home.component';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { CommunityDetailComponent } from './community-detail/community-detail.component';


@NgModule({
  declarations: [CommunityHomeComponent, CommunityDetailComponent],
  imports: [
    CommonModule,
    CommunityRoutingModule,
    OntimizeWebModule
  ]
})
export class CommunityModule { }
