import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-travelers-reservation-detail',
  templateUrl: './travelers-reservation-detail.component.html',
  styleUrls: ['./travelers-reservation-detail.component.css']
})
export class TravelersReservationDetailComponent implements OnInit {

  public id_reservation;
  public id_client_traveler;
  public name_traveler;
  public id_client_host;
  public message ;
  public message_answer;
  public id_status;     
  public surname_traveler ;
  public email_traveler ;
  public name_host ;
  public surname_host;
  public phonenumber_host;
  public email_host ;
  public status_name ;
  public reservation_date ;





  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialog: MatDialog,
    private ontimizeServiceUsers: OntimizeService
    
    
  ) { this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users')); }


  
  ngOnInit() {
    this.ontimizeServiceUsers.query({id_reservation: this.data.id_reservation }, ['id_reservation','id_client_traveler','id_client_host',
    'message','id_status','name_traveler','surname_traveler','email_traveler','message_answer','name_host','surname_host','email_host',
    'phonenumber_host','status_name','reservation_date'], 'reservation').subscribe(
      res => {
     

        this.id_reservation = res.data[0].id_reservation;
        this.id_client_traveler = res.data[0].id_client_traveler;
        this.name_traveler = res.data[0].name_traveler;
        this.id_client_host = res.data[0].id_client_host;
        this.message = res.data[0].message;
        this.message_answer = res.data[0].message_answer;
        this.id_status = res.data[0].id_status;      
        this.surname_traveler = res.data[0].surname_traveler;
        this.email_traveler = res.data[0].email_traveler;
        this.name_host = res.data[0].name_host;
        this.surname_host = res.data[0].surname_host;
        this.email_host = res.data[0].email_host;
        this.phonenumber_host = res.data[0].phonenumber_host;
        this.status_name = res.data[0].status_name;
        this.reservation_date = res.data[0].reservation_date;  
           
        
     
      }
    );

  }

}



