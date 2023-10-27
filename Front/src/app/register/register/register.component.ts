import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NavigationService } from 'ontimize-web-ngx';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  validatorsArray: ValidatorFn[] = []; // Array de validadores personalizados
  isPasswordModified: boolean = false; // Indicador de si la contraseña ha sido modificada
  router: Router;
  form: FormGroup;

  constructor(
    router: Router,
    @Inject(NavigationService) public navigation: NavigationService,
    private fb: FormBuilder
    ) {

    this.validatorsArray.push(this.passwordValidator); // Añadir el validador de contraseña al array
    this.router = router;

  }

  ngOnInit() {
    this.form = this.fb.group({
      user_: ['', [Validators.required, Validators.email]],
      // ... otros campos del formulario
    });
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

  goToLogin(){
    this.router.navigate(["/login"]);
    console.log("Hola toi aqui");
  }

}
