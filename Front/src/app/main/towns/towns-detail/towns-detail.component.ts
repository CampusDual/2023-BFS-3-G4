import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OGridComponent, OListComponent, OTextInputComponent, OntimizeService } from 'ontimize-web-ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-towns-detail',
  templateUrl: './towns-detail.component.html',
  styleUrls: ['./towns-detail.component.css']
})
export class TownsDetailComponent implements OnInit {

  @ViewChild('townnamefield', { static: true }) townnamefield: OTextInputComponent;
  @ViewChild('form',{static:true}) form:OFormComponent;
  public idcommunity;
  public custom_name: string;

  constructor(private router: Router,
    private ontimizeServiceUsers: OntimizeService) {
  }

  ngOnInit() {
  }

  splitActivities(activities){
    // activities es un string tal que asi:
    // "futbol,musica,baile", este metodo devuelve  
    // un array con esos datos para poder iterarlo: [futbol, musica, baile]
    if (activities && typeof activities === 'string') {
      const arrayActivities = activities.split(',');
      
      return arrayActivities;
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

  onLoad(){
    this.idcommunity = this.form.getComponents().id_community.getValue();
  }


}
