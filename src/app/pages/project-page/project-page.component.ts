import { Component } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { DataService } from '../../core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../core/models/skill.model';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent {
  project:Project|undefined;
  techs: Skill[] = [];

  constructor(
    private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){
    this.activatedRoute.paramMap.subscribe({
      next: res=>{
        // console.log(res.get('id'));
        
        if(res.get('id')){
          this.project = dataService.getProject(res.get('id') as unknown as number); 
          if(this.project){
            this.techs = dataService.getTechs(this.project.tags.tech);
            console.log(this.techs);
          }
        }
      }
    })
  }
}
