import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetJsonService } from '../../Services/get-json.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public ruta = 'Inicio';


  constructor(private router: Router, private service: GetJsonService) { }

  public formulario = function() {
    this.router.navigate(['formulario']);
    this.ruta = 'Formulario';
  };

  public tabla = function() {
    this.router.navigate(['tabla']);
    this.ruta = 'Tabla';
  };

  public eliminar = function() {
    this.router.navigate(['eliminar']);
    this.ruta = 'Eliminar';
  };

  public inicio = function() {
    this.router.navigate(['']);
    this.ruta = 'Inicio';
  };


  ngOnInit() {
    this.service.getConfig().subscribe( res => {
      const response = res;
      console.log(response);
    });
  }

}
