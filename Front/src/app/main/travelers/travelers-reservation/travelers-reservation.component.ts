import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ODateInputComponent, OTextInputComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-travelers-reservation',
  templateUrl: './travelers-reservation.component.html',
  styleUrls: ['./travelers-reservation.component.css']
})
export class TravelersReservationComponent implements OnInit {

  @ViewChild('message', { static: true }) messagefield: OTextInputComponent;
  @ViewChild('id_client_host', { static: true }) id_client_host: OTextInputComponent;
  @ViewChild('date', { static: true }) date: ODateInputComponent;
  public messageString:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialog: MatDialog,
    
    private ontimizeServiceUsers: OntimizeService
  ) { 
    this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users'));
  }

  ngOnInit() {
  }

  sendReservation() {


    this.messageString = this.messagefield.getValue();
    let id_client_host = this.data.id_client_host;
    let date = this.date.getValueAsDate();
    console.log(date);

    let hashmap: { [key: string]: any } = {};
    hashmap['message'] = this.messageString;
    hashmap['id_client_host'] = id_client_host;
    hashmap['reservation_date'] = date;
 
    console.log(hashmap);
    
  
    this.ontimizeServiceUsers.insert(hashmap,'reservation').subscribe();

    this.dialog.closeAll();

   
  }
}
