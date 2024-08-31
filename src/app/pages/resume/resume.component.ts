import { AfterContentInit, AfterViewInit, Component, ElementRef, Inject, OnInit, PLATFORM_ID, viewChild } from '@angular/core';
import { TitleComponent } from '../../components/title/title.component';
import { Meta, Title } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { isPlatformBrowser } from '@angular/common';
import { Skill, Skills } from '../../core/models/skill.model';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [TitleComponent, MatIconModule],
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent implements AfterViewInit, OnInit {

  line = viewChild<ElementRef<HTMLDivElement>>('line');
  education: {title:string, institute?:string, start?:number|string, end:number|string, page?:string, overview:string}[] = [
    {
      title: 'Analista de Sistemas de Computación',
      institute : 'IAES',
      page: 'https://iaes.edu.ar/',
      start: 2023,
      end: 'Presente',
      overview: 'Formación integral en análisis, diseño, e implementación de sistemas de computación, con énfasis en desarrollo de software y gestión de proyectos tecnológicos.'
    },{
      title: 'Curso de Backend Java',
      start: 'Abril 2023',
      institute : 'Oracle + Alura',
      end: 'Octubre 2023',
      page : 'https://www.oracle.com/ar/education/oracle-next-education/',
      overview: 'Curso intensivo enfocado en el desarrollo backend utilizando Java, incluyendo manejo de bases de datos y APIs REST con la libreria SpringBoot'
    },{
      title: 'Curso de Inglés',
      institute : 'CUI - UBA',
      end: 'Agosto 2023',
      page: 'https://cui.edu.ar/',
      overview: 'Curso de inglés con enfoque en comprensión de textos técnicos.'
    }
  ];

  skills:Skill[] =[];

  constructor(protected title:Title,
    @Inject(PLATFORM_ID) private plataformId:Object,
    private dataService:DataService,
    private metaService: Meta
  ){
    dataService.getSkills().subscribe({
      next: res=>{
        this.skills = res.skills;
      }
    })
  }


  ngOnInit(): void {
    this.metaService.addTags([
      { name: 'description', content: 'Descubre mi formación académica y habilidades técnicas. En esta sección, detallo mi educación, desde estudios en diferentes instituciones hasta las habilidades y herramientas que manejo en el desarrollo de software.' },
      { name: 'keywords', content: 'educación, formación académica, habilidades técnicas, herramientas de desarrollo, tecnología, aprendizaje, desarrollo de software' },
      { name: 'author', content: 'Kevin Stockmanns' },
      { property: 'og:title', content: 'Educación y Habilidades | Portafolio de Stockmanns Kevin' },
      { property: 'og:description', content: 'Explora mi educación y habilidades técnicas en esta sección. Incluye información sobre mi formación académica y las herramientas que utilizo en el desarrollo de software.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://kevin-stockmanns.netlify.app/images/meta/profile.png' }, 
      { property: 'og:url', content: 'https://kevin-stockmanns.netlify.app/education-skills' }, 
      // { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Educación y Habilidades | Portafolio de Stockmanns Kevin' },
      { name: 'twitter:description', content: 'Descubre mi formación académica y habilidades técnicas. Detalles sobre mi educación y las herramientas que utilizo en el desarrollo de software.' },
      { name: 'twitter:image', content: 'https://kevin-stockmanns.netlify.app/images/meta/profile.png' } 
    ]);
    
  }


  ngAfterViewInit(): void {
    if(isPlatformBrowser(this.plataformId)){
      this.updateLine();

      window.addEventListener("resize", e=>{
        this.updateLine();
      })
    }

  }

  updateLine(){
    let dots = document.querySelectorAll(".dot");
    let l = this.line()?.nativeElement;
    if(dots.length>0){
      let firstDot = dots[0] as HTMLElement;
      let lastDot = dots[dots.length-1] as HTMLElement;
      let height = lastDot.offsetTop - firstDot.offsetTop;
      if(l)
        l.style.height = `${height-5}px`;
    }
  }
}
