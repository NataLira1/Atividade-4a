import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path:"inicio", component: InicioComponent },
  { path:"login", component: LoginComponent},
  { path:'', reditectTo:'/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
