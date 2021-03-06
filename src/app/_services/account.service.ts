import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor() { }

  isLogged(){
    return localStorage.getItem("logueado") == "true" ? true : false
  }
}
