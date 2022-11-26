import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { Auth } from '../interfaces/auth.interfaces';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlDesarrollo: string = environment.urlDesarrollo;
  // Almaceno los nombres de usuario
  private _auth: Auth | undefined;
  // Muestro el nombre de usuario desestructurado con los ...this
  get auth (): Auth{
    return { ...this._auth!};
  }

  constructor( private http:HttpClient) { }

  login(){
    // Si ponemos una ruta no válida protege esa ruta
    return this.http.get<Auth>(`${ this.urlDesarrollo}/usuario/1`)
          .pipe(
            //tap( resp => console.log ('AUTHSERVICE', resp))
            tap( auth => this._auth = auth)
          );
                
  }
  logout() {
    this._auth = undefined;
  }

}
