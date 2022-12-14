import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Actividad } from '../interfaces/actividad.interfaces';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ActividadService {

  //Variable url de desarrollo definida en environments/environment.ts
  //http://localhost:3000
  private urlDesarrollo: string = environment.urlDesarrollo;

  constructor( private http: HttpClient ) { }

  getActividad(): Observable <Actividad[]> {

    return this.http.get<Actividad[]>(`${ this.urlDesarrollo }/actividad `);
  
  }

  getActividadPorId ( id: string): Observable <Actividad> {
    return this.http.get<Actividad>(`${ this.urlDesarrollo }/actividad/${id}`);

  }

  getAutocompletar( palabra: string): Observable <Actividad []>{
    return this.http.get<Actividad[]>(`${ this.urlDesarrollo }/actividad?q=${palabra}&_limit=6`);

  }

  // Petición post que recibe una actividad y retorna una actividad
  // Inyectamos el servicio en agregarActividad.ts
  agregarActividad(actividad : Actividad): Observable <Actividad>{
    return this.http.post<Actividad>(`${ this.urlDesarrollo}/actividad`, actividad);

  }
  actualizarActividad(actividad : Actividad): Observable <Actividad>{
    return this.http.put<Actividad>(`${ this.urlDesarrollo}/actividad/${ actividad.id}`, actividad);

  }

  borrarActividad(actividad : Actividad): Observable <any>{
    return this.http.delete<any>(`${ this.urlDesarrollo}/actividad/${ actividad.id}`);

  }


}
