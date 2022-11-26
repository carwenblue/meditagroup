import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  email!: string;
  password!: string;


  constructor( public router: Router,
              public authService: AuthService) { 
              
              }

  login(){
   
    //Ir al backend y verificar usuario existe
    //Un usuario almacenado en una servicio
    //Navegar a la pantalla actividades: 
    this.authService.login()
    .subscribe(resp => { 
      console.log(resp);
      // Si existe el id (inyectado en el auth service a través de la interfaz auth)     
      if (resp.id){
        this.router.navigate(['./actividades']);
      }

   
    })
 
    

  }

  sinLogin(){
    this.authService.logout()
    this.router.navigate(['/home'])
  }
}
