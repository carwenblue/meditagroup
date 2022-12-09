import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from "sweetalert2";

// Service
import { AuthService } from '../../services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  
  // validaciones Formulario reactivo--->  html 
  miFormulario: FormGroup = this.fb.group ({
    email:    ['dorian@gmail.com', [ Validators.required]],
    password: ['dorian123', [ Validators.required, Validators.minLength(4)]],
  })


  constructor( private router: Router, private authService: AuthService, private fb: FormBuilder) { }

  // Validators
  campoObligatorio ( campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }

  login(){
    // LLamamos al servicio y navegamos a la pantalla actividades: 
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
