import { Routes } from '@angular/router';

export const routes: Routes = [
    {'path': '', 
    loadChildren: () => import('./initial/initial.module').then(m => m.InitialModule)},
    {'path': 'register', 
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
    {'path': 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    {'path': 'homepage', 
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)}
];
