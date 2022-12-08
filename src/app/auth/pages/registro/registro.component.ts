import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  registro(): void {}

}
