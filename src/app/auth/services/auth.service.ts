import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { tap, Observable, map, catchError } from 'rxjs';
import { User, Usuario } from '../../interfaces/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlDesarrollo: string = environment.urlDesarrollo;
  
  // Almaceno los nombres de usuario para usos de simulación
  private _auth: User | undefined;
  // Muestro el nombre de usuario desestructurado con los ...this
  get auth (): User{
    return { ...this._auth!};
  }

  constructor( private http:HttpClient) { }

  verificarAuteticacion(): Observable<boolean> | boolean {
    // El id equivale al token
    if( !localStorage.getItem('token')){
    return false;
    }
    return this.http.get<Usuario>(`${ this.urlDesarrollo}/usuario/1`)
        .pipe(
          map( auth => {
            console.log('map', auth);
            return true;
          })
        );

  }
  registro(nombre: string, email: string, password: string){
    const url= `${ this.urlDesarrollo}/usuario`;
    const body = {nombre, email, password};

    return this.http.post<User>(url, body)
    .pipe(
      tap( resp => {
        localStorage.setItem('token', resp.id);
        this._auth = {
          id: resp.id,
          nombre: resp.nombre,
          email: resp.email,
          password: resp.password
        }
      }),
      map( resp => resp.id)
    );

    

  }

  login(){
    // Si ponemos una ruta no válida protege esa ruta
    return this.http.get<Usuario>(`${ this.urlDesarrollo}/usuario/1`)
          .pipe(
            //tap( resp => console.log ('AUTHSERVICE', resp))
            // Paso por el login y lo almaceno en el localstorage
            tap( auth => this._auth = auth),
            tap( auth => {
              if(auth.id){
                localStorage.setItem('token', auth.id)
              }
            }));
                
  }

  logout() {
    localStorage.removeItem('token');
    console.log ('token eliminado');
    
  }

}
