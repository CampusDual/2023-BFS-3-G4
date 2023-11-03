import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-travelers-detail',
  templateUrl: './travelers-detail.component.html',
  styleUrls: ['./travelers-detail.component.css']
})
export class TravelersDetailComponent implements OnInit {
  @ViewChild('form',{static:true}) form:OFormComponent;
  
  router: Router;

  constructor(router: Router,) { 
    this.router = router;
  }

  ngOnInit() {
  }

  reservationFn(){   
    let id_client = this.form.getComponents().id_client.getValue();
    console.log(id_client);
    this.router.navigate(["main/travelers/reservation", id_client]);
  }
}
