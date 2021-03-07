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
      email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      contraseña: ['',[Validators.required, Validators.minLength(5)]],
      contraseñaConfirmada: ''
    });
  }

  formGroup: FormGroup;

  activo: String = ""
  class = ['container', '']
  error = false

  signInButton() {
    this.class = ['container']
  }

  signUpButton() {
    this.class = ['container', 'right-panel-active']
  }

  submitRegisterForm() {
    console.log(this.formGroup.value)
    if(this.formGroup.value.contraseña == this.formGroup.value.contraseñaConfirmada && this.formGroup.value.contraseñaConfirmada != ''){
      console.log("asd")
      localStorage.setItem("logueado","true")
      this.emitirLogueo()
    }
    else{
      this.error = true
    }
  }

  submitLoginForm() {
    if(this.formGroup.get('email').errors || this.formGroup.get('contraseña').errors ){
     console.log("bruh")
    }
    else{
      localStorage.setItem("logueado","true")
     this.emitirLogueo()
    }
   
  }
  emitirLogueo(){
   this.seLogueo.emit(true)
  }

}
