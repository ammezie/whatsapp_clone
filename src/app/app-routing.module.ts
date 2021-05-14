import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { BlankComponent } from './components/layouts/blank/blank.component';
import { DefaultComponent } from './components/layouts/default/default.component';
import { WelcomeComponent } from './components/pages/welcome/welcome.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  {
    path: 'auth',
    component: BlankComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  },
  {
    path: '',
    component: DefaultComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: WelcomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
