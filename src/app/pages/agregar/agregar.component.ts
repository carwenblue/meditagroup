import { Component, OnInit } from '@angular/core';
import { Actividad } from '../../interfaces/actividad.interfaces';
import { ActividadService } from '../../services/actividad.service.';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {


  actividad: Actividad = {
    titulo: '',
    descripcion: '',
    instructor:'',
    activa:'',
    duracion: new Date() ,
    inicio: new Date(),
    categoria:'',
    id: ''

  }

  // Si queremos guardar el url usamos el activatedRoute
  constructor(private actividadService: ActividadService, 
              private activatedRoute: ActivatedRoute, 
              private router : Router) { }

  ngOnInit(): void {


    if( !this.router.url.includes('editar')){
      return;
    }
    
    //Verifico el url
    //La activiadad que declaro arriba va a ser igual a la actividad que recibo
    this.activatedRoute.params
    .pipe (
      switchMap( ({id}) => this.actividadService.getActividadPorId(id))
    ).subscribe ( actividad =>this.actividad = actividad);
    //.subscribe(({id}) => console.log( id ))

  }

  
    /*
    
      */
 

  guardar() {
    console.log(this.actividad);
    if ( this.actividad.titulo.trim().length === 0 || !this.actividad.inicio){
      return;
    }

    if ( this.actividad.id){
      //update
      this.actividadService.actualizarActividad( this.actividad )
      .subscribe ( actividad => console.log ('Se ha actualizado la activiadad: ', actividad))
    } else{
        //Create actividad
        this.actividadService.agregarActividad( this.actividad )
        .subscribe ( actividad => {
          console.log('Respuesta', actividad);
          this.router.navigate ( ['/editar', actividad.id])
        })
    }

    
  }

borrarActividad (){
  if ( this.actividad.id){
  this.actividadService.borrarActividad( this.actividad )
      .subscribe(resp => {
    
        this.router.navigate(['/actividades'])
      })
  }
}

}
