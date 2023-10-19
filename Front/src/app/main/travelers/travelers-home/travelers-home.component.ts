import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-travelers-home',
  templateUrl: './travelers-home.component.html',
  styleUrls: ['./travelers-home.component.css']
})
export class TravelersHomeComponent implements OnInit {

  @ViewChild('form',{static:true}) form:OFormComponent;
  
  constructor(private auth:AuthService) { }

  ngOnInit() {
  }

  hostActive: boolean = false;

  toggleHost(event: any) {
    this.hostActive = event;
  }
  
  ngAfterViewInit(){
    this.form.queryData({user_:this.auth.getSessionInfo().user});
  }
}
