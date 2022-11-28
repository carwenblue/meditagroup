import { Pipe, PipeTransform } from '@angular/core';
import { Actividad } from '../../interfaces/actividad.interfaces';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(actividad: Actividad): string {
    //Excepción para page de agregar (no hay imagen) y actividadades
    if ( !actividad.id || !actividad.alt_img){
      return 'assets/no-image-available.jpeg';
    } else {
        // ej. assets/actividades/breathing.jpg
    //console.log (actividad);
    return `assets/actividades/${ actividad.id}.jpg`;
    }
    
  

    
  }

}
