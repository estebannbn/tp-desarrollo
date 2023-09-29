import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import {RegistrarUserComponent} from "./components/registrar-user/registrar-user.component";
const routes: Routes = [
  {path:'', redirectTo: 'login',pathMatch:'full'},
  {path:'login', component: LoginComponent,},
  {path:'registrar-user', component: RegistrarUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
