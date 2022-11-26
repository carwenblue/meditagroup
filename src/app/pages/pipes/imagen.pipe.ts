import { Pipe, PipeTransform } from '@angular/core';
import { Actividad } from '../../interfaces/actividad.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(actividad: Actividad): unknown {

    if ( !actividad.id){
      return 'assets/no-image.jpg';
    } 
    
    // ej. assets/actividades/breathing.jpg
    console.log (actividad);
    return `assets/actividades/${ actividad.id}.jpg`;

    
  }

}
