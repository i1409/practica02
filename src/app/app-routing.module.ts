import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './Components/Generals/inicio/inicio.component';
import { FormularioComponent } from './Components/Generals/formulario/formulario.component';
import { ErrorComponent } from './Components/error/error.component';
import { TablaComponent } from './Components/Generals/tabla/tabla.component';
import { EliminarComponent } from './Components/Generals/eliminar/eliminar.component';



const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'formulario', component: FormularioComponent},
  {path: 'tabla', component: TablaComponent},
  {path: 'eliminar', component: EliminarComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
