import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JsonfyService } from 'src/app/_services/jsonfy.service';


@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.css']
})
export class DetalleProductoComponent {

  constructor(private activatedRoute:ActivatedRoute, private jsonfy: JsonfyService) { 
    this.cargarProducto();
  }

producto

async cargarProducto(){
  try{
      const id = this.activatedRoute.snapshot.paramMap.get("id")
      console.log(id)
      this.producto = await this.jsonfy.getProducto(id).toPromise();
      console.log(this.producto)
    }catch(e){

    }
}


}
