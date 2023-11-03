import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { OFormComponent } from 'ontimize-web-ngx';
import { TravelersReservationComponent } from '../travelers-reservation/travelers-reservation.component';

@Component({
  selector: 'app-travelers-detail',
  templateUrl: './travelers-detail.component.html',
  styleUrls: ['./travelers-detail.component.css']
})
export class TravelersDetailComponent implements OnInit {
  @ViewChild('form',{static:true}) form:OFormComponent;
  
  router: Router;

  constructor(
    router: Router,
    protected dialog: MatDialog,) { 
    this.router = router;
  }

  ngOnInit() {
  }

  public openReservation(data: any): void {
    let id_client = this.form.getComponents().id_client.getValue();
    this.dialog.open(TravelersReservationComponent, {
      
      height: '330px',
      width: '520px',
      data: {
        id_client_host: id_client
      },
    });
  }
/*
  reservationFn(){   
    let id_client = this.form.getComponents().id_client.getValue();
    console.log(id_client);
    this.router.navigate(["main/travelers/reservation", id_client]);
  }
  */
}
