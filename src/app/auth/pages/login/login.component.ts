import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  
  // validaciones Formulario reactivo--->  html 
  miFormulario: FormGroup = this.fb.group ({
    email:    ['', [ Validators.required]],
    password: ['', [ Validators.required, Validators.minLength(4)]],
  })


  email!: string;
  password!: string;


  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  // Validators
  campoObligatorio ( campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
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
