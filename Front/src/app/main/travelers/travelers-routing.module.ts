import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelersHomeComponent } from './travelers-home/travelers-home.component';
import { TravelersDetailComponent } from './travelers-detail/travelers-detail.component';


const routes: Routes = [
  {path:'', component:TravelersHomeComponent},
  {path:':id_client', component:TravelersDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelersRoutingModule { }
