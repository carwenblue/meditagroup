import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Usuario } from '../../interfaces/usuario.interfaces';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  _usuario!: Usuario;

  constructor(private activatedRoute: ActivatedRoute, 
    private  usuarioService: UsuarioService,
    private router: Router) { }

  ngOnInit(): void {

    // Recibo el Id de usuario y lo muestro
  this.activatedRoute.params
  .pipe(
    switchMap (({id})=> this.usuarioService.getUsuarioPorId(id))
  ).subscribe( usuario => this._usuario = usuario);
  }

  // Método para volver
  volver(){
    this.router.navigate(['/actividades']);
  }

  guardar() {
    console.log(this._usuario);
    if ( this._usuario.nombre.trim().length === 0 || !this._usuario.email){
      return;
    }

    if ( this._usuario.id){
      //update
      this.usuarioService.actualizarUsuario( this._usuario )
      .subscribe ( usuario => console.log ('Se ha actualizado el usuario: ', usuario))
      
    } else{
        // Alta usuario
        this.usuarioService.altaUsuario( this._usuario )
        .subscribe ( usuario => {
        console.log('Respuesta', usuario);
        
        })
    }

    
  }


  

}
