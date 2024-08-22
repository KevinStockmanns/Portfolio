import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Title } from '@angular/platform-browser';
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
    @Inject(PLATFORM_ID) private plataformId:Object
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
  }
}
