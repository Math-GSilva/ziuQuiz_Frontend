import { Routes } from '@angular/router';

export const routes: Routes = [
    {'path': '', 
    loadChildren: () => import('./initial/initial.module').then(m => m.InitialModule)},
    {'path': 'register', 
    loadChildren: () => import('./register/register.module').then(m => m.RegisterModule)},
    {'path': 'login', 
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
    {'path': 'recoverPassword', 
    loadChildren: () => import('./recover-password/recover-password.module').then(m => m.RecoverPasswordModule)},
    {'path': 'homepage',
    loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)},
    {'path': 'userpage',
    loadChildren: () => import('./userpage/userpage.module').then(m => m.UserpageModule)},
    {'path': 'topquiz',
    loadChildren: () => import('./topquiz/topquiz.module').then(m => m.TopquizModule)},
    {'path': 'foryou',
    loadChildren: () => import('./foryou/foryou.module').then(m => m.ForyouModule)},
    {'path': 'searchByCategory',
    loadChildren: () => import('./search-by-category/search-by-category.module').then(m => m.SearchByCategoryModule)},
    {'path': 'categories',
    loadChildren: () => import('./categories/categories.module').then(m => m.CategoriesModule)},
];
