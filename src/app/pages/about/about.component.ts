import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor(protected title:Title, private metaService: Meta){

  }

  ngOnInit(): void {
      this.metaService.addTags([
      { name: 'description', content: 'Soy un desarrollador FullStack con experiencia en la creación de aplicaciones web escalables y eficientes. Especializado en backend, manejo APIs RESTful, bases de datos y más. Desde Argentina, busco oportunidades para crecer profesionalmente.' },
      { name: 'keywords', content: 'desarrollador FullStack, analista de sistemas, desarrollo backend, APIs RESTful, bases de datos, Argentina, aplicaciones web, portafolio, desarrollo web' },
      { name: 'author', content: 'Stockmanns Kevin' },
      { property: 'og:title', content: 'Desarrollador FullStack | Portafolio de Analista de Sistemas' },
      { property: 'og:description', content: 'Soy un desarrollador FullStack con experiencia en la creación de aplicaciones web escalables y eficientes. Especializado en backend, manejo APIs RESTful, bases de datos y más. Desde Argentina, busco oportunidades para crecer profesionalmente.' },
      { property: 'og:type', content: 'website' },
      // { property: 'og:image', content: 'URL de la imagen de vista previa' },
      { property: 'og:url', content: 'https://kevin-stockmanns.netlify.app' },
      // { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Desarrollador FullStack | Portafolio de Analista de Sistemas - Argentina' },
      { name: 'twitter:description', content: 'Soy un desarrollador FullStack con experiencia en la creación de aplicaciones web escalables y eficientes. Especializado en backend, manejo APIs RESTful, bases de datos y más. Desde Argentina, busco oportunidades para crecer profesionalmente.' },
      // { name: 'twitter:image', content: 'URL de la imagen de vista previa' }
      ]);
  }
}
