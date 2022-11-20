import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActividadesComponent } from './pages/actividades/actividades.component';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { HomeComponent } from './pages/home/home.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


const routes: Routes = [
  
  {path:'actividades', component: ActividadesComponent},
  {path:'contactanos', component: ContactanosComponent},
  {path:'home', component: HomeComponent},
  {path:':id', component: MostrarComponent},
  {path:'editar/:id', component: AgregarComponent},
  {path:'perfil', component: PerfilComponent},
  {path:'**', redirectTo:'home', pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
