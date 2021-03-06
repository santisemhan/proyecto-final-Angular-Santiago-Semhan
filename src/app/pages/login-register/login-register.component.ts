import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {

 @Output() 
 seLogueo : EventEmitter<boolean> = new EventEmitter<boolean>();
 logueado = false

  constructor(private fb: FormBuilder,
    private router: Router) { 

    }

  ngOnInit() {
    this.formGroup = this.fb.group({
      email: '',
      contraseña: '',
      contraseñaConfirmada: ''
    });
  }

  formGroup: FormGroup;

  activo: String = ""
  class = ['container', '']

  signInButton() {
    this.class = ['container']
  }

  signUpButton() {
    this.class = ['container', 'right-panel-active']
  }

  submitRegisterForm() {
    localStorage.setItem("logueado","true")
    this.emitirLogueo()
  }

  submitLoginForm() {
   localStorage.setItem("logueado","true")
    this.emitirLogueo()
  }
  emitirLogueo(){
   this.seLogueo.emit(true)
  }

}
