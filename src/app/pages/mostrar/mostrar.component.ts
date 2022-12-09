import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import Swal from "sweetalert2";

import { ActividadService } from '../../services/actividad.service.';
import { Actividad } from 'src/app/interfaces/actividad.interfaces';




@Component({
  selector: 'app-mostrar',
  templateUrl: './mostrar.component.html',
  styleUrls: ['./mostrar.component.css']
})
export class MostrarComponent implements OnInit {

  actividad! : Actividad;

  constructor( private activatedRoute: ActivatedRoute, 
    private  actividadService: ActividadService,
    private router: Router ) { }

  ngOnInit(): void {

   // Recibo el Id de actividad y lo muestro
   this.activatedRoute.params

   .pipe(
      switchMap (({id})=> this.actividadService.getActividadPorId(id))
   )
   //.subscribe(({id})=> console.log(id));
   .subscribe( actividad => this.actividad = actividad);
  }
 
  volver(){
    this.router.navigate(['/actividades']);
  }

  alert(){
    Swal.fire('Buen trabajo','Te has unido a esta actividad', 'success');
  }
}


