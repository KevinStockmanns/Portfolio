import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Skill, Skills } from '../models/skill.model';
import { Project, Projects } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getSkills(): Observable<Skills>{
    return this.http.get<Skills>('data/skills.json');
  }

  getProjects():Observable<Projects>{
    return this.http.get<Projects>('data/projects.json');
  }
  getProject(id:number):Project|undefined{
    let projects: Project[] = [];
    this.getProjects().subscribe({
      next: res=>{
        projects = res.projects;
      }
    })

    return projects.find(el=>el.id == id);
  }


  getTechs(ids: number[]): Skill[]{
    let techs: Skill[] = [];
    this.http.get<Skills>('data/skills.json').subscribe(res=>{
      ids.forEach(el=> techs.push(res.skills.find(skill=> skill.id == el) as Skill));
    })
    return techs;
  }
}
