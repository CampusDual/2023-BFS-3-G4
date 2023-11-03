import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OGridComponent, OListComponent, OTextInputComponent, OntimizeService } from 'ontimize-web-ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-towns-detail',
  templateUrl: './towns-detail.component.html',
  styleUrls: ['./towns-detail.component.css']
})
export class TownsDetailComponent implements OnInit {

  @ViewChild('form',{static:true}) form:OFormComponent;
  @ViewChild('townnamefield',{static:true}) townnamefield:OTextInputComponent;
  public custom_name:string; 

  public arrayActivitiesClient: string[];

  constructor(private router: Router,
    private ontimizeServiceUsers: OntimizeService) { 
      this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users'));
    }

  ngOnInit() {
  }

  onLoad(){
    let idclient = this.form.getComponents().id_client.getValue();
    console.log(idclient);
    this.ontimizeServiceUsers.query({id_client: idclient}, ['id_activity', 'activity_name'], 'activity_client').subscribe(
      res => {
        if (res.data && res.data.length) {
          this.arrayActivitiesClient = [];
          res.data.forEach(element => {
            this.arrayActivitiesClient.push(element.activity_name);
          });
        }
      }      
    ); 
    console.log(this.arrayActivitiesClient + "patata") 
   }

  loadName(){
   this.custom_name = this.townnamefield.getValue();

  }

  reloadValues(event){
    if(event.newValue){
      this.custom_name = event.newValue.value;
    }
  }
  goToHostDetail(event){
    const obj = event;
    type ObjectKey = keyof typeof obj;
    const myVar = 'id_client' as ObjectKey;
    var id_client = obj[myVar];
    console.log(id_client);
    this.router.navigate(["main/travelers", id_client]);
  }    

 
}
