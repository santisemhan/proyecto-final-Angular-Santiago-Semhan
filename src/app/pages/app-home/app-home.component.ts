import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/_services/account.service';

@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent implements OnInit {

  constructor(private accountService: AccountService, private router: Router) { }

  logueado

  ngOnInit(): void {
    this.logueado = this.accountService.isLogged()
  }

  cerrarSesion(){
    localStorage.setItem("logueado","false")
    this.logueado = false
  }  

  recibir(){
    this.logueado = true
  }
}
