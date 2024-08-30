import { Component } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { DataService } from '../../core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../core/models/skill.model';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule } from '@angular/common';
import { TechItemComponent } from '../../components/tech-item/tech-item.component';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ButtonComponent, TechItemComponent, CommonModule],
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
          this.dataService.getProject(res.get('id') as unknown as number).subscribe({
            next: pro=>{
              this.project = pro;
              if(this.project){
                this.dataService.getTechs(this.project.tags.tech).subscribe({
                  next: techs => {
                    this.techs = techs;
                  }
                });
              }
            }
          })
        }
      }
    })
  }
}
