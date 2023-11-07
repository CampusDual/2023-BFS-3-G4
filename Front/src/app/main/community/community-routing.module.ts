import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommunityHomeComponent } from './community-home/community-home.component';


const routes: Routes = [
  {path:'', component:CommunityHomeComponent},
  // {path:':id_town', component:CommunityDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommunityRoutingModule { }
