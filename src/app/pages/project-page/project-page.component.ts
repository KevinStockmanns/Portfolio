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
import { Meta, MetaDefinition } from '@angular/platform-browser';
import { switchMap } from 'rxjs';

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
    
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id') as unknown as number;
        return this.dataService.getProject(id);
      }),
      switchMap(pro => {
        this.project = pro;
        if (this.project) {
          this.dataService.getTechs(this.project.tags.tech).subscribe(techs => {
            this.techs = techs;
          });
        }
        return this.dataService.getMetaTag(this.project?.id as number);
      })
    ).subscribe(metaRes => {
      let metaData: MetaDefinition[] = [];
      metaRes[0]?.content.forEach(el => {
        if (el.hasOwnProperty('name')) {
          metaData.push({ name: el.name as string, content: el.content });
        } else {
          metaData.push({ property: el.property as string, content: el.content });
        }
      });
      this.metaService.addTags(metaData);
    });
  }
}
