import { Component, OnInit } from '@angular/core';
import { GetJsonService } from '../../Services/get-json.service';
import { Personas } from '../inicio/inicio.component';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {
  public contador: number;
  public personas = new Array<Personas>();
  constructor(private service: GetJsonService) { }

  ngOnInit(): void {
    this.service.getConfig().subscribe( (perso: Personas[]) => {
      const response = perso;
      console.log(response);
      this.contador = perso.length + 1;
      this.personas = perso;
      this.makeTable();

  });
  }
  public makeTable() {
    return;
  }

}
