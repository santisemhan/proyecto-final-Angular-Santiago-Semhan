import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppComponent } from './app.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { LoginRegisterComponent } from './login-register/login-register.component';

const routes: Routes = [
  {path:"", component: AppHomeComponent},
  {path:"producto/:id", component: DetalleProductoComponent},
  {path:"contacto", component: ContactoComponent},
  {path:"login", component: LoginRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
