import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonfyService {

  constructor(private http: HttpClient) { }

  getProductos(): Observable<any> {
    return this.http.get<any>("https://jsonfy.com/items")
  }
  getProducto(id){
    return this.http.get("https://jsonfy.com/items/" + id)
  }
}
