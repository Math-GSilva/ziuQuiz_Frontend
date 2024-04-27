import { Routes } from '@angular/router';

export const routes: Routes = [
    {'path': '', 
    loadChildren: () => import('./initial/initial.module').then(m => m.InitialModule)},
    {'path': 'register', 
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)}
];
