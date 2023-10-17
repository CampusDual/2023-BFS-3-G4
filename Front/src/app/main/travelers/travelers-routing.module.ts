import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TravelersHomeComponent } from './travelers-home/travelers-home.component';


const routes: Routes = [
  {path:'', component:TravelersHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TravelersRoutingModule { }
