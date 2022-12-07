import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { tap, Observable, map } from 'rxjs';
import { Usuario } from '../../interfaces/usuario.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlDesarrollo: string = environment.urlDesarrollo;
  
  // Almaceno los nombres de usuario para usos de simulación
  private _auth: Usuario | undefined;
  // Muestro el nombre de usuario desestructurado con los ...this
  get auth (): Usuario{
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
    this._auth = undefined;
  }

}
