import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { OTextInputComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-travelers-reservation',
  templateUrl: './travelers-reservation.component.html',
  styleUrls: ['./travelers-reservation.component.css']
})
export class TravelersReservationComponent implements OnInit {

  @ViewChild('message', { static: true }) messagefield: OTextInputComponent;
  @ViewChild('id_client_host', { static: true }) id_client_host: OTextInputComponent;
  public messageString:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ontimizeServiceUsers: OntimizeService
  ) { 
    this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users'));
  }

  ngOnInit() {
  }

  sendReservation() {
 
    this.messageString = this.messagefield.getValue();
    let id_client_host = this.id_client_host.getValue(); 
  
    this.ontimizeServiceUsers.insert([id_client_host,this.messageString],'reservationPrueba').subscribe();
  }
}
