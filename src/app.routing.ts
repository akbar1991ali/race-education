import { LoginComponent } from './app/login/login.component';
// import { AuthGuard } from './_guards/auth.guard';

import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent},
    // { path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
  
    
    // otherwise redirect to Login
    { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);