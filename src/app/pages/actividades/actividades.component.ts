import { Component, OnInit } from '@angular/core';
import { Actividad } from 'src/app/interfaces/actividad.interfaces';
import { ActividadService } from '../../services/actividad.service.';

@Component({
  selector: 'app-listado',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.css']
})
export class ActividadesComponent implements OnInit{
 
  actividades: Actividad[] = []; // Arreglo de actividades
  
  
  constructor ( private actividadService: ActividadService) {}

  ngOnInit(): void {
    
    //.subscribe ( resp => console.log(resp));  Similar a .subscribe (console.log)
      
    this.actividadService.getActividad()
    .subscribe(  actividades=> this.actividades = actividades  ); // Obtener arreglo de actividades en la pág actividades con ngFor ="let actividad of actividades" e imprimir por ej {{actividad.titulo}}
    
  }
 
}
