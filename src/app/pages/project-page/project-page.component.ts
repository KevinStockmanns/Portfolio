import { Component, OnInit } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { DataService } from '../../core/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from '../../core/models/skill.model';
import { ButtonComponent } from '../../components/button/button.component';
import { CommonModule, LowerCasePipe } from '@angular/common';
import { TechItemComponent } from '../../components/tech-item/tech-item.component';
import { StatusComponent } from '../../components/status/status.component';
import { MatIconModule } from '@angular/material/icon';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-project-page',
  standalone: true,
  imports: [ButtonComponent, TechItemComponent,StatusComponent, MatIconModule, LowerCasePipe, CommonModule],
  templateUrl: './project-page.component.html',
  styleUrl: './project-page.component.css'
})
export class ProjectPageComponent implements OnInit {
  project:Project|undefined;
  techs: Skill[] = [];

  constructor(
    private dataService:DataService,
    private activatedRoute:ActivatedRoute,
    private router:Router,
    private metaService: Meta
  ){
    this.activatedRoute.paramMap.subscribe({
      next: res=>{
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

  ngOnInit(): void {
    this.dataService.getMetaTag(this.project?.id as number).subscribe(res=>{
      this.metaService.addTags(
        res[0].content.map(el=>{
          return {name: el.name ? el.name : el.property as string, content: el.content}
        })
      )
    });
  }
}
