import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: '',
      contraseña: '',
      contraseñaConfirmada: ''
    });
  }

  formGroup: FormGroup;

  //clase = []
  activo: String = ""
  class = ['container', '']

  signInButton() {
    this.class = ['container']
    //this.activo = ""
  }

  signUpButton() {
    this.class = ['container', 'right-panel-active']
    //this.activo = "right-panel-active"
  }

  submitRegisterForm() {
    //asd
  }

  submitLoginForm() {
    //asd
  }

}
