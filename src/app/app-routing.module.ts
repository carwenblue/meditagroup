import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ActividadesComponent } from './pages/actividades/actividades.component';
import { AgregarComponent } from './pages/agregar/agregar.component';

import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { HomeComponent } from './pages/home/home.component';
import { MostrarComponent } from './pages/mostrar/mostrar.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AuthGuard } from './auth/guards/auth.guard';





const routes: Routes = [
  
  //LazyLoad para entrar al path de autenticación mediante promesa
  {
    path: 'auth', loadChildren:()=> import('./auth/auth.module').then( m => m.AuthModule)

  },
  {
    path:'actividades', component: ActividadesComponent
  },
  {path: 'buscar', component: BuscarComponent},
  {path:'contactanos', component: ContactanosComponent},
  {path: 'agregar', component: AgregarComponent,
  canActivate: [AuthGuard]
},
  {path: 'editar/:id', component: AgregarComponent,
  canActivate: [AuthGuard]
},
  {path:'home', component: HomeComponent},
  {path:':id', component: MostrarComponent},
  
  {path:'perfil/:id', component: PerfilComponent},

  {path:'**', redirectTo:'home'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
