import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { UserComponent } from './user/user.component';
import { PatientComponent } from './patient/patient.component';

const routes: Routes = [
  { path: 'admin', component: AdminComponent, pathMatch: 'full'},
  { path: 'user', component: UserComponent, pathMatch: 'full'},
  { path: 'patient', component: PatientComponent, pathMatch: 'full'},
  { path: 'login', component: LoginFormComponent, pathMatch: 'full'},
  { path: 'signup', component: RegistrationFormComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
