import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

// validaciones síncronas y asíncronas
miFormulario: FormGroup = this.fb.group ({
  email:   ['', [Validators.required]],
  // Contraseña mínimo 8 caracteres
  password:['', [ Validators.required, Validators.minLength(4)]]
})


constructor(private router: Router, private authService: AuthService, private fb: FormBuilder) { }
  
  // Validators
  
  campoObligatorio ( campo: string){
    return this.miFormulario.get(campo)?.invalid && this.miFormulario.get(campo)?.touched;
  }



  ngOnInit(): void {
  }

  registro(): void {

    console.log(this.miFormulario.value);
    // Leer los campos que vienen del formulario, de forma desestructurada
    const { nombre, email, password } = this.miFormulario.value;
    // LLamada al servicio
    this.authService.registro(nombre, email, password)
    .subscribe ( resp => {
      if(resp){
        console.log(resp);
        this.router.navigateByUrl('/actividades');
        Swal.fire('¡Bienvenido/a!','Te has registrado correctamente', 'success');

      }else {
        Swal.fire('Error', 'Correo ya está en uso', 'error');

      }
      
    })
    
  }

}
