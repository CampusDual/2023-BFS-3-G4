import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-travelers-home',
  templateUrl: './travelers-home.component.html',
  styleUrls: ['./travelers-home.component.css']
})
export class TravelersHomeComponent implements OnInit {

  @ViewChild('form',{static:true}) form:OFormComponent;
  @ViewChild('formHost',{static:true}) formHost:OFormComponent;

  public arrayActivitiesClient: string[];

  validatorsArray: ValidatorFn[] = []; // Array de validadores personalizados
  isPasswordModified: boolean = false; // Indicador de si la contraseña ha sido modificada
  
  constructor(private auth:AuthService, private ontimizeService: OntimizeService) { 
    this.ontimizeService.configureService(this.ontimizeService.getDefaultServiceConfiguration('users'));

    this.validatorsArray.push(this.passwordValidator); // Añadir el validador de contraseña al array
  }

  ngOnInit() {
  }

  onLoad(){
let idclient = this.form.getComponents().id_client.getValue();
    this.ontimizeService.query({id_client: idclient}, ['id_activity', 'activity_name'], 'activity_client').subscribe(
      res => {
        if (res.data && res.data.length) {
          this.arrayActivitiesClient = [];
          res.data.forEach(element => {
            this.arrayActivitiesClient.push(element.activity_name);
          });
        }

        }
      
    );
   
   }
  
  hostActive: boolean = false;

  toggleHost(event: any) {
    this.hostActive = event;
  }
  
  ngAfterViewInit(){
    this.form.queryData({user_:this.auth.getSessionInfo().user});
    this.formHost.queryData({user_:this.auth.getSessionInfo().user});
  }

  onPasswordInput() {
    this.isPasswordModified = true; // La contraseña ha sido modificada
  }

  passwordValidator(control: any): any {
    try {
      const password = control.parent ? control.parent.controls['password'].value : null; // Obtener el valor de la contraseña
      const passwordConfirm = control.value; // Obtener el valor de la confirmación de contraseña

      if (password !== passwordConfirm) {
        return { passwordNotMatched: true }; // Las contraseñas no coinciden
      } else if (!/^(?=.*\d)(?=.*[a-zA-Z])(?=.*[^a-zA-Z\d]).{8,}$/.test(password)) {
        return { passwordNotSize: true }; // La contraseña no cumple con los requisitos de tamaño
      } else {
        return null; // La contraseña es válida
      }
    } catch (e) {
      return null;
    }
  }

  passwordMatchValidator(control: any): any {

    try {

      const password = control.parent ? control.parent.controls['password'].value : null; // Obtener el valor de la contraseña
      const passwordConfirm = control.value; // Obtener el valor de la confirmación de contraseña

      return password === passwordConfirm ? null : { passwordNotMatched: true }; // Las contraseñas no coinciden

    } catch (e) {
      return null;
    }

  }

  // yourFn(event){
  //   if (event.index == 0) {
  //     this.form.queryData({user_:this.auth.getSessionInfo().user});
  //   }
  //   else if (event.index == 1) {
  //     this.formHost.queryData({user_:this.auth.getSessionInfo().user});
  //   }
    
  // }
}
