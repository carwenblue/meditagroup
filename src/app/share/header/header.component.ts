import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/auth/interfaces/auth.interfaces';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Usuario } from 'src/app/interfaces/usuario.interfaces';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario!: Usuario;


  // DEspués de inyectar el servicio auth y creo una nueva propiedad auth de la interface  
  //auth!: Auth; // undefined
  get auth(){
    return this.authService.auth;
  }
  
  constructor(private router: Router,
              private authService: AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.router.navigate(['./auth/login']);

  }

  sinLogin(){
    this.authService.logout()
    this.router.navigate(['/home'])
  }

}
