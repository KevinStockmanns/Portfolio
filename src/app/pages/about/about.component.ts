import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TitleComponent } from '../../components/title/title.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TitleComponent, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  services: {title:string, overview:string, icon:string}[] =[
    {
      title: 'Diseño Web',
      overview: 'Creación de diseños modernos y responsivos que se adaptan a cualquier dispositivo, garantizando una experiencia de usuario óptima.',
      icon: 'palette'
    },{
      title: 'Desarrollo Frontend',
      overview: 'Construcción de interfaces interactivas utilizando tecnologías como Angular asegurando una navegación fluida y dinámica.',
      icon: 'web'
    },{
      title: 'Desarrollo Backend',
      overview: 'Implementación de APIs robustas y escalables con Springboot y otras tecnologías, facilitando la comunicación eficiente entre el frontend y las bases de datos.',
      icon: 'code'
    },{
      title: 'Admin. de Base de Datos',
      overview: 'Gestión y optimización de bases de datos, incluyendo la configuración, el mantenimiento, y la seguridad de bases de datos SQL y NoSQL, garantizando un rendimiento óptimo y la integridad de los datos.',
      icon: 'database'
    }
  ]

  constructor(protected title:Title, private metaService: Meta){

  }

  ngOnInit(): void {
      this.metaService.addTags([
      { name: 'description', content: 'Soy un desarrollador FullStack con experiencia en la creación de aplicaciones web escalables y eficientes. Especializado en backend, manejo APIs RESTful, bases de datos y más. Desde Argentina, busco oportunidades para crecer profesionalmente.' },
      { name: 'keywords', content: 'desarrollador FullStack, analista de sistemas, desarrollo backend, APIs RESTful, bases de datos, Argentina, aplicaciones web, portafolio, desarrollo web' },
      { name: 'author', content: 'Kevin Stockmanns' },
      { property: 'og:title', content: 'Desarrollador FullStack | Portafolio de Analista de Sistemas' },
      { property: 'og:description', content: 'Soy un desarrollador FullStack con experiencia en la creación de aplicaciones web escalables y eficientes. Especializado en backend, manejo APIs RESTful, bases de datos y más. Desde Argentina, busco oportunidades para crecer profesionalmente.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://kevin-stockmanns.netlify.app/images/meta/profile.png' },
      { property: 'og:url', content: 'https://kevin-stockmanns.netlify.app/about' },
      // { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Desarrollador FullStack | Portafolio de Analista de Sistemas - Argentina' },
      { name: 'twitter:description', content: 'Soy un desarrollador FullStack con experiencia en la creación de aplicaciones web escalables y eficientes. Especializado en backend, manejo APIs RESTful, bases de datos y más. Desde Argentina, busco oportunidades para crecer profesionalmente.' },
      { name: 'twitter:image', content: 'https://kevin-stockmanns.netlify.app/images/meta/profile.png' }
      ]);
  }
}
