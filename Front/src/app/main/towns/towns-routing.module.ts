import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TownsHomeComponent } from './towns-home/towns-home.component';


const routes: Routes = [
  
  {path:'', component:TownsHomeComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class TownsRoutingModule { }
