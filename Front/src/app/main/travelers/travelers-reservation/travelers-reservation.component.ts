import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-travelers-reservation',
  templateUrl: './travelers-reservation.component.html',
  styleUrls: ['./travelers-reservation.component.css']
})
export class TravelersReservationComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
