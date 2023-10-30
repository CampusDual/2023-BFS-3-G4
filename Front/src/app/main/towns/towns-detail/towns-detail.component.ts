import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OListComponent, OTextInputComponent } from 'ontimize-web-ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-towns-detail',
  templateUrl: './towns-detail.component.html',
  styleUrls: ['./towns-detail.component.css']
})
export class TownsDetailComponent implements OnInit {

 
  @ViewChild('townnamefield',{static:true}) townnamefield:OTextInputComponent;
  public custom_name:string; 

  constructor(private router: Router) { }

  ngOnInit() {
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
