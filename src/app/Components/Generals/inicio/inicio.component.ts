import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

export class Personas {
  public id: any;
  public nombre: string;
  public correo: string;
  public telefono: string;
  public direccion: string;

  constructor() {

  }
}
