import { Component, Input } from '@angular/core';
import { Actividad } from '../../../interfaces/actividad.interfaces';

@Component({
  selector: 'app-mostrar-actividad',
  templateUrl: './mostrar-actividad.component.html',
  styleUrls: ['./mostrar-actividad.component.css']
})
export class MostrarActividadComponent {

  @Input() actividad!: Actividad; // Puede ser de tipo Actividad o undefined *** actividad: Actividad | undefined;

}
