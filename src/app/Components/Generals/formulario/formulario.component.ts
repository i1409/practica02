import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GetJsonService } from '../../Services/get-json.service';
import { Personas } from '../inicio/inicio.component';
import { stringify } from 'querystring';
import { HttpClient } from '@angular/common/http';




@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {


  constructor(private service: GetJsonService, public builder: FormBuilder, public http: HttpClient) {
    this.forma = this.builder.group({
      pnombre: ['', Validators.required],
      pcorreo: ['', [Validators.required, Validators.email]],
      ptelefono: ['', [Validators.required,
         Validators.pattern(RegExp('^[0-9]+$')),
         Validators.maxLength(10), Validators.minLength(10)]],
      pdireccion: ['', Validators.required]
    });
   }

  public personas = new Array<Personas>();
  public persona = new Personas();
  public forma: FormGroup;
  public datos = {};
  public contador = 0;


  public fileData: File;

  public setDatos(): void {
     this.datos = {
      id: this.contador,
      nombre: this.forma.value.pnombre,
      correo: this.forma.value.pcorreo,
      telefono: this.forma.value.ptelefono,
      direccion: this.forma.value.pdireccion
    };
   }

  public getInfo = function() {
    this.service.getConfig().subscribe( res => {
      const response = res;
      console.log(response);


    }, error => {
      console.log(JSON.stringify(error));
    }
    );
  };

  ngOnInit(): void {
    this.service.getConfig().subscribe( (perso: Personas[]) => {
      const response = perso;

      console.log(response);
      this.contador = perso[perso.length - 1].id + 1;
      this.personas = perso;


  });

}

  public submit = function() {
    this.setDatos();
    return this.service.postInfo(this.datos).subscribe( res => {
      const response = res;
      console.log(response);
      this.getInfo();

      this.clearFormulario();
      }, error => {

        console.log(JSON.stringify(error));

      });
  };

  public clearFormulario(): void {
    this.contador++;
    this.forma.reset();
  }

  public showPhotoPath() {
    alert(this.forma.value.pfoto);
  }

  public colorButton() {
    if (this.forma.valid) {
      return true;
    } else {
      return false;
    }
  }



  }
