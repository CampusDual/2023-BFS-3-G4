import { Component, OnInit, ViewChild } from '@angular/core';
import { OFormComponent, OListComponent, OTextInputComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'app-towns-detail',
  templateUrl: './towns-detail.component.html',
  styleUrls: ['./towns-detail.component.css']
})
export class TownsDetailComponent implements OnInit {

 
  @ViewChild('townnamefield',{static:true}) townnamefield:OTextInputComponent;
  public custom_name:string; 

  constructor() { }

  ngOnInit() {
  }

  loadName(){
   this.custom_name = this.townnamefield.getValue();

  }

  reloadValues(event){
    console.log(event.newValue.value);
    this.custom_name = event.newValue.value;
  }


}
