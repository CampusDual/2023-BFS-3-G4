import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OTextInputComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-travelers-all',
  templateUrl: './travelers-all.component.html',
  styleUrls: ['./travelers-all.component.css']
})
export class TravelersAllComponent implements OnInit {

  @ViewChild('activitynamefield', { static: true }) activitynamefield: OTextInputComponent;
  public custom_name: string;

  constructor(private router: Router,
    private ontimizeServiceUsers: OntimizeService,
    private route: ActivatedRoute) { }

  ngOnInit() {
  }

  splitActivities(activities){
    if (activities && typeof activities === 'string') {
      const arrayActivities = activities.split(',');
      
      return arrayActivities;
    } else {
      return [];
    }
  }

  goToHostDetail(event) { 
    const obj = event;
    type ObjectKey = keyof typeof obj;
    const myVar = 'id_client' as ObjectKey;
    var id_client = obj[myVar];
    this.router.navigate(["main/travelers", id_client]);
  }

  loadName() {
    this.custom_name = this.activitynamefield.getValue();

  }

  reloadValues(event) {
    if (event.newValue) {
      this.custom_name = event.newValue.value;
    }
  }

}
