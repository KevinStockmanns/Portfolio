import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/about',
        pathMatch: 'full'
    },{
        path: '',
        component: HomeComponent,
        children: [{
            path: 'about',
            title: 'Sobre Mí',
            component: AboutComponent
        },{
            path: 'resume',
            title: 'Resúmen',
            loadComponent: ()=> import('./pages/resume/resume.component').then(el=>el.ResumeComponent)
        }]
    }
];
