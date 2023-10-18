import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travelers-home',
  templateUrl: './travelers-home.component.html',
  styleUrls: ['./travelers-home.component.css']
})
export class TravelersHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  hostActive: boolean = false;

  toggleHost(event: any) {
    this.hostActive = event;
  }
}
