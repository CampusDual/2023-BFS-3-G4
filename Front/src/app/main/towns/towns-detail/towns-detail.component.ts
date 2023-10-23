import { Component, OnInit, ViewChild } from '@angular/core';
import { OListComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-towns-detail',
  templateUrl: './towns-detail.component.html',
  styleUrls: ['./towns-detail.component.css']
})
export class TownsDetailComponent implements OnInit {

  @ViewChild('list',{static:true}) form:OListComponent;

  constructor() { }

  ngOnInit() {
  }

}
