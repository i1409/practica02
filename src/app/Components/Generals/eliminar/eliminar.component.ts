import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../../Services/get-json.service';
import { Personas } from '../inicio/inicio.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { registerContentQuery } from '@angular/core/src/render3';
import { and } from '@angular/router/src/utils/collection';
import { CodeNode } from 'source-list-map';
import { stringify } from 'querystring';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {

  private personas = new Array<Personas>();
  public forma: FormGroup;
  public result = new Array<Personas>();
  private personaslenght: number;
  private reg: RegExp;
  private bid = false;
  private bnombre = false;
  public con = 0;

  constructor( private service: GetJsonService, private builder: FormBuilder) {
    this.forma = this.builder.group({
      id: '',
      nombre: ''
    });
  }

  ngOnInit(): void {
    this.service.getConfig().subscribe( (perso: Personas[]) => {
      const response = perso;

      console.log(response);
      this.personas = perso;
      this.personaslenght = this.personas.length;

  });
  }

  // Actualiza la tabla

  public update() {
    this.service.getConfig().subscribe( (perso: Personas[]) => {
      const response = perso;
      console.log(response);
      this.personas = perso;
      this.buscar();
      this.personaslenght = this.personas.length;

  });
    this.initBooleanos();
  }

  // Establece Booleanos en falso

  public initBooleanos() {
    this.bid = false;
    this.bnombre = false;
  }

  // Limpia arreglo

  public initArreglo() {
    this.result = new Array<Personas>();
  }

  // Limpia Forma

  public initForma() {
    this.forma = this.builder.group({
      id: '',
      nombre: ''
    });
  }


  // Valida el tipo de busqueda (id o nombre)

  public tipoBusqueda() {

    this.reg = new RegExp('^[0-9]+$');
    if (this.forma.value.id !== '') {
      if (this.reg.test(this.forma.value.id)) {
      //  alert('Busuqeda ID');

        this.bid = true;
        this.bnombre = false;
      } else {
        alert('ID no valido, debe ser tipo numerico');
        this.initBooleanos();
        return;
      }
    }
    if (!this.bid === true && this.forma.value.nombre !== '') {
      // alert('Busuqeda Nombre');
      this.bnombre = true;
      this.bid = false;
    } else if (!this.bid === true) {
      alert('Debe llenar un campo para realizar la busqueda');
      this.initBooleanos();
    } else {
      this.bnombre = false;
    }
  }

  // Realiza la busqueda para llenar la tabla

public buscar() {
  this.initArreglo();
  this.tipoBusqueda();
  if ( this.bid) {

    for (let cont = 0; cont < this.personaslenght; cont++) {
          if (this.forma.value.id === String(this.personas[cont].id)) {
            console.log(this.personas[cont]);
            this.result.push(this.personas[cont]);
      }
    }
  }
  if ( this.bnombre ) {
    for (let conta = 0; conta < this.personaslenght; conta++) {
      if (this.personas[conta].nombre.toUpperCase().search(
        RegExp ('(' + this.forma.value.nombre + ')+')) > -1 ) {
        console.log(this.personas[conta]);
        this.result.push(this.personas[conta]);
      } else if (this.personas[conta].nombre.toLowerCase().search(
        RegExp ('(' + this.forma.value.nombre + ')+')) > -1 ) {
          console.log(this.personas[conta]);
          this.result.push(this.personas[conta]);
      }
    }
  }
  if ( this.result.length < 1 ) {
      alert('No results');
      this.initBooleanos();
      return;
      // this.update();
  }
}


  public borrar = function(delid: number) {
    return this.service.dropConfig(delid).subscribe( res => {
      const response = res;
      console.log(response);
      this.result.splice(delid);
      this.update();
      // this.initForma();
    }, error => {
      console.log(JSON.stringify(error));
    });
  };
}
