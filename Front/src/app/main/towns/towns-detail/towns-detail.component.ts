import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OGridComponent, OListComponent, OTextInputComponent, OntimizeService } from 'ontimize-web-ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-towns-detail',
  templateUrl: './towns-detail.component.html',
  styleUrls: ['./towns-detail.component.css']
})
export class TownsDetailComponent implements OnInit {

  @ViewChild('grid', { static: true }) grid: OGridComponent;
  @ViewChild('townnamefield', { static: true }) townnamefield: OTextInputComponent;
  public custom_name: string;

  public arrayActivities: string[];

  constructor(private router: Router,
    private ontimizeServiceUsers: OntimizeService) {
    this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users'));
  }

  ngOnInit() {
  }

  splitActivities(activities){
    if (activities && typeof activities === 'string') {
      const partes = activities.split(',');
      return partes;
    } else {
      return [];
    }
  }

  // loadActivities(idclient) {
  //   console.log(idclient);
  //   this.ontimizeServiceUsers.query({ id_client: idclient }, ['id_activity', 'activity_name'], 'activity_client').subscribe(
  //     res => {
  //       if (res.data && res.data.length) {
  //         this.arrayActivitiesClient [idclient] = [];
  //         res.data.forEach(element => {
  //           this.arrayActivitiesClient[idclient].push(element.activity_name);
  //         });
  //       }
  //     }
  //   );
  // }

  loadName() {
    this.custom_name = this.townnamefield.getValue();

  }

  reloadValues(event) {
    if (event.newValue) {
      this.custom_name = event.newValue.value;
    }
  }
  goToHostDetail(event) {
    const obj = event;
    type ObjectKey = keyof typeof obj;
    const myVar = 'id_client' as ObjectKey;
    var id_client = obj[myVar];
    console.log(id_client);
    this.router.navigate(["main/travelers", id_client]);
  }


}
