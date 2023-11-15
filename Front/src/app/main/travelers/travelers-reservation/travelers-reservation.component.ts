import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { ODateInputComponent, OSnackBarConfig, OTextInputComponent, OntimizeService, SnackBarService } from 'ontimize-web-ngx';
import * as moment from 'moment';

@Component({
  selector: 'app-travelers-reservation',
  templateUrl: './travelers-reservation.component.html',
  styleUrls: ['./travelers-reservation.component.css']
})
export class TravelersReservationComponent implements OnInit {

  public selectedDates = {};

  @ViewChild('message', { static: true }) messagefield: OTextInputComponent;
  @ViewChild('id_client_host', { static: true }) id_client_host: OTextInputComponent;
  @ViewChild('date', { static: true }) date: ODateInputComponent;
  public messageString:string;
  public today: number;

  constructor(

  
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialog: MatDialog,
    private snackBarService: SnackBarService,
    
    private ontimizeServiceUsers: OntimizeService
  ) { 

    
      
  
    this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users'));
  }

 

  ngOnInit() {
    this.today = Date.now();
  }

  sendReservation() {


    this.messageString = this.messagefield.getValue();
    let id_client_host = this.data.id_client_host;
    let date = this.date.getValueAsDate();
    let read_traveler = true;
    let read_host = false;
    console.log(date);

    let hashmap: { [key: string]: any } = {};
    hashmap['message'] = this.messageString;
    hashmap['id_client_host'] = id_client_host;
    hashmap['reservation_date'] = date;
    hashmap['read_traveler'] = read_traveler;
    hashmap['read_host'] = read_host;
 
    console.log(hashmap);
    
  
    this.ontimizeServiceUsers.insert(hashmap,'reservation').subscribe(res => {

      this.dialog.closeAll();

      if (res.code == 0) {        
        // Mostrar el snack-bar con el mensaje de éxito
        const config: OSnackBarConfig = {
          action: 'OK',
          milliseconds: 5000,
          icon: 'check_circle_outline',
          iconPosition: 'left'
        };
        this.snackBarService.open('Petición enviada', config);
      } else {
        // Mostrar el snack-bar con el mensaje de error
        this.snackBarService.open(`Error: ${res.message}`, { milliseconds: 5000 });
      }

    });

   
   
  }


}
