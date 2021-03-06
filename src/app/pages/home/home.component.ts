import { Component, OnInit } from '@angular/core';
import { JsonfyService } from 'src/app/_services/jsonfy.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private jsonfy: JsonfyService) { }

  productos: any = []
  async ngOnInit() {
    this.productos = await this.jsonfy.getProductos().toPromise();
    console.log(this.productos)
  }

}
