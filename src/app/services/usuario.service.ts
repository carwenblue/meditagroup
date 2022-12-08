import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/usuario.interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  //Variable url de desarrollo definida en environments/environment.ts
  //http://localhost:3000
  private urlDesarrollo: string = environment.urlDesarrollo;

  

constructor(  private http: HttpClient ) { }


getUsuario(): Observable <Usuario[]> {

    return this.http.get<Usuario[]>(`${ this.urlDesarrollo }/usuario `);
  
  }
  
  getUsuarioPorId ( id: string): Observable <Usuario> {
    return this.http.get<Usuario>(`${ this.urlDesarrollo }/usuario/1`);
  
  }
  getUsuarioPorEmail ( email: string): Observable <Usuario> {
    return this.http.get<Usuario>(`${ this.urlDesarrollo }/usuario/juan@gmail.com`);
  
  }
  
   // Petición post que recibe una actividad y retorna una actividad
    // Inyectamos el servicio en agregarActividad.ts
    altaUsuario(usuario : Usuario): Observable <Usuario>{
      return this.http.post<Usuario>(`${ this.urlDesarrollo}/usuario`, usuario);
  
    }
    actualizarUsuario(usuario : Usuario): Observable <Usuario>{
      return this.http.put<Usuario>(`${ this.urlDesarrollo}/usuario/${ usuario.id}`, usuario);
  
    }

}
