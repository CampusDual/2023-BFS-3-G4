import { Component, OnInit, ViewChild } from '@angular/core';
import { ValidatorFn } from '@angular/forms';
import { AuthService, OFormComponent, OntimizeService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-travelers-home',
  templateUrl: './travelers-home.component.html',
  styleUrls: ['./travelers-home.component.css']
})
export class TravelersHomeComponent implements OnInit {

  @ViewChild('form', { static: true }) form: OFormComponent;
  @ViewChild('formHost', { static: true }) formHost: OFormComponent;

  public arrayActivitiesClient: string[];
  public arrayActivitiesClientNumber: number[];

  public maxActivitiesReached: boolean = false;


  validatorsArray: ValidatorFn[] = []; // Array de validadores personalizados
  isPasswordModified: boolean = false; // Indicador de si la contraseña ha sido modificada

  constructor(private auth: AuthService,
    private ontimizeServiceUsers: OntimizeService) {
    this.ontimizeServiceUsers.configureService(this.ontimizeServiceUsers.getDefaultServiceConfiguration('users'));


    this.validatorsArray.push(this.passwordValidator); // Añadir el validador de contraseña al array
  }

  ngOnInit() {

  }

  onLoad() {
    let idclient = this.form.getComponents().id_client.getValue();
    this.ontimizeServiceUsers.query({ id_client: idclient }, ['id_activity', 'activity_name'], 'activity_client').subscribe(
      res => {
        this.arrayActivitiesClient = [];
        if (res.data && res.data.length) {
          this.arrayActivitiesClientNumber = [];
          res.data.forEach(element => {
            this.arrayActivitiesClient.push(element.activity_name);
            this.arrayActivitiesClientNumber.push(element.id_activity);
          });
        }
      }
    );
  }

  hostActive: boolean = false;

  toggleHost(event: any) {
    this.hostActive = event;
  }

  ngAfterViewInit() {
    this.form.queryData({ user_: this.auth.getSessionInfo().user });
    this.formHost.queryData({ user_: this.auth.getSessionInfo().user });
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

  addActivityFn(a: string, b: number) {
    if (this.arrayActivitiesClient.length < 5 && this.arrayActivitiesClient.length >= 0) {
      this.arrayActivitiesClient.push(a);
      this.arrayActivitiesClientNumber.push(b);
      console.log(this.arrayActivitiesClient);
      console.log(this.arrayActivitiesClientNumber);
      this.maxActivitiesReached = false;
    } else {
      this.maxActivitiesReached = true;
      // Aquí puedes mostrar un mensaje o hacer algo más para notificar al usuario.
    }
  }

  removeActivityFn(a: Object, b: Object) {
    this.arrayActivitiesClient = this.arrayActivitiesClient.filter(item => item !== a);
    this.arrayActivitiesClientNumber = this.arrayActivitiesClientNumber.filter(item => item !== b);
    console.log(this.arrayActivitiesClient);
    console.log(this.arrayActivitiesClientNumber);
  }

  saveActivitiesInDataBase() {
    let idclient = this.form.getComponents().id_client.getValue();
    console.log(idclient);
    this.ontimizeServiceUsers.update({ id_client: idclient }, { activity_ids: this.arrayActivitiesClientNumber }, 'activity_client').subscribe(res => {
      if (res.code == 0) {
        console.log("Cambios realizados con éxito")
      } else {
        console.log("Error del back:" + res.message)
  }

});







    //     this.ontimizeServiceUsers.delete({id_client: idclient}, 'activity_clientMultipleDel').subscribe( res =>
    //       {
    //         if (res.code == 0){
    //           console.log("cambios realizados con éxitos")
    //         }else{
    //           console.log("error del back:" + res.message)
    //         }


    //       });

    //      for (let i = 0; i < this.arrayActivitiesClient.length; i++) {
    //       this.ontimizeServiceUsers.insert( {       
    //         "id_client": 7,
    //         "id_activity": 5}
    //     , 'activity_client');   


    // }
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
