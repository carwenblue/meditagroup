import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor ( private authService: AuthService,
                private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if( this.authService.auth.id){
      return true;
    }

    console.log ( 'Bloqueado por el authGuard- CanActivate');
    return false;
    
  }

  // Dejen pasar a todos en el módulo indicado
  /*
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    console.log( 'canLoad', true);
    console.log( route);
    console.log( segments);

    
      return true;
  }*/
}
