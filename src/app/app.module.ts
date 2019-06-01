import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule} from '@angular/common/http';


import { NavbarComponent } from './Components/Generals/navbar/navbar.component';
import { FormularioComponent } from './Components/Generals/formulario/formulario.component';
import { InicioComponent } from './Components/Generals/inicio/inicio.component';
import { TablaComponent } from './Components/Generals/tabla/tabla.component';
import { ErrorComponent } from './Components/error/error.component';
import { EliminarComponent } from './Components/Generals/eliminar/eliminar.component';
import { GetJsonService } from './Components/Services/get-json.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FormularioComponent,
    InicioComponent,
    TablaComponent,
    ErrorComponent,
    EliminarComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    GetJsonService
  ],
  bootstrap: [AppComponent],
  exports: [
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AppModule { }
