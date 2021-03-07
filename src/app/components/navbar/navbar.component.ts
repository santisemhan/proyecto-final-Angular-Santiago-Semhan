import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

@Output() 
cerroSesion : EventEmitter<boolean> = new EventEmitter();

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  
  cerrarSesion(){
    localStorage.setItem("logueado","false")
    this.cerroSesion.emit(true)
    this.router.navigateByUrl("/login")
  }

}
