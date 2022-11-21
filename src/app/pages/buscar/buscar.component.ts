import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Actividad } from '../../interfaces/actividad.interfaces';
import { ActividadService } from '../../services/actividad.service.';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {
  
  //Variables que voy a necesitar para los métodos
  palabra: string = '';
  actividades: Actividad[] = [];
  actividadSeleccionada: Actividad | undefined;


  constructor(private actividadServices: ActividadService) { }

  ngOnInit(): void {
  }

  buscador(){
  //uso el trim para eliminar espacios vacíos
    this.actividadServices.getAutocompletar(this.palabra.trim())
    .subscribe (actividades => this.actividades = actividades);
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent){
    
  console.log (event.option.value);
    //Validar si es un string vacío
    if (!event.option.value){
      console.log('no hay ningún valor');
     this.actividadSeleccionada = undefined;
      return;
    }

    
    // Para extraer el valor del evento autocomplete y que se escriba en el placeholder
    const actividad: Actividad = event.option.value; //console.log(event);
    //Para asegurarme el console log me devolverá toda la información de la actividad
    //console.log (actividad); 
    this.palabra = actividad.titulo;
    
    // llamo al método porId del servicio. Nueva petición http.
    this.actividadServices.getActividadPorId( actividad.id!)
        .subscribe( actividad => this.actividadSeleccionada = actividad);
  }

}
