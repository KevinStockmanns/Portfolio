import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

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
        },{
            path: 'portfolio',
            title: 'Portafolio',
            loadComponent: ()=>import('./pages/portfolio-page/portfolio-page.component').then(el=>el.PortfolioPageComponent)
        },{
            path: 'contact',
            title: 'Contacto',
            loadComponent: ()=>import('./pages/contact-page/contact-page.component').then(el=>el.ContactPageComponent)
        }]
    },{
        path:'project/:id',
        title: 'Proyecto',
        loadComponent: ()=> import('./pages/project-page/project-page.component').then(el=>el.ProjectPageComponent)
    },{
        path: '**',
        component: ErrorPageComponent
    }
];
