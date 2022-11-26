import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ActividadesComponent } from './actividades/actividades.component';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MostrarActividadComponent } from './components/mostrar-actividad/mostrar-actividad.component';
import { MostrarComponent } from './mostrar/mostrar.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { BuscarComponent } from './buscar/buscar.component';









@NgModule({
  declarations: [
    HomeComponent,
    ActividadesComponent,
    ContactanosComponent,
    PerfilComponent,
    MostrarActividadComponent,
    MostrarComponent,
    AgregarComponent,
    ImagenPipe,
    BuscarComponent,
  
  
    
  ],
  imports: [
    CommonModule, 
    FormsModule,
    MaterialModule,
    RouterModule
  ]
})
export class PagesModule { }
