import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material';

@Component({
  selector: 'app-travelers-reservation-detail',
  templateUrl: './travelers-reservation-detail.component.html',
  styleUrls: ['./travelers-reservation-detail.component.css']
})
export class TravelersReservationDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    protected dialog: MatDialog,
  ) { }

  ngOnInit() {
  }

}
