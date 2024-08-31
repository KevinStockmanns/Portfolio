import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TitleComponent } from '../../components/title/title.component';
import { Project } from '../../core/models/project.model';
import { DataService } from '../../core/services/data.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';

import * as Aos from 'aos';
import { isPlatformBrowser } from '@angular/common';
@Component({
  selector: 'app-portfolio-page',
  standalone: true,
  imports: [TitleComponent, ProjectCardComponent],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.css'
})
export class PortfolioPageComponent implements OnInit {

  projects: Project[]=[];

  constructor(
    protected title:Title,
    private dataService:DataService,
    @Inject(PLATFORM_ID) private plataformId:Object,
    private metaService: Meta
  ){
    dataService.getProjects().subscribe({
      next: res=>{
        this.projects = res.projects;
      }
    })
  }

  ngOnInit(): void {
    if(isPlatformBrowser(this.plataformId))
      Aos.init();

    this.metaService.addTags([
      { name: 'description', content: 'Explora mi portafolio como Desarrollador FullStack. Aquí encontrarás proyectos que demuestran mis habilidades en desarrollo web, incluyendo aplicaciones escalables, APIs RESTful y soluciones personalizadas.' },
      { name: 'keywords', content: 'portafolio de desarrollador, proyectos de desarrollo web, Desarrollador FullStack, aplicaciones web, APIs RESTful, desarrollo de software, soluciones personalizadas' },
      { name: 'author', content: 'Kevin Stockmanns' },
      { property: 'og:title', content: 'Portafolio de Desarrollador FullStack | Stockmanns Kevin' },
      { property: 'og:description', content: 'Explora mi portafolio donde muestro proyectos de desarrollo web, incluyendo aplicaciones escalables y APIs RESTful. Soy un Desarrollador FullStack con habilidades en crear soluciones personalizadas.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://kevin-stockmanns.netlify.app/images/meta/profile.png' },
      { property: 'og:url', content: 'https://kevin-stockmanns.netlify.app/portfolio' },
      // { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Portafolio de Desarrollador FullStack | Stockmanns Kevin' },
      { name: 'twitter:description', content: 'Descubre los proyectos en mi portafolio que demuestran mis habilidades en desarrollo web. Desde aplicaciones escalables hasta APIs RESTful, todo está aquí.' },
      { name: 'twitter:image', content: 'https://kevin-stockmanns.netlify.app/images/meta/profile.png' }
    ]);
    
  }
}
