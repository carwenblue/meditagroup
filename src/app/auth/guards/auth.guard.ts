import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor ( private authService: AuthService, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      if(!this.authService.verificarAuteticacion()){

        console.log (this.authService.verificarAuteticacion());
        alert('No tienes permiso para acceder a esta página, vuelve al login');
        this.router.navigate(['/auth/login'])
        return false;
      }
     
      return true;
   
    
    }
   
  
    
  }


