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
  getProject(id:number):Observable<Project|undefined>{
    return this.getProjects().pipe(
      map(res => res.projects.find(el => el.id == id))
    );
  }


  getTechs(ids: number[]): Observable<Skill[]>{
    return this.getSkills().pipe(
      map(res => 
        ids.map(id => res.skills.find(skill => skill.id == id) as Skill)
      )
    );
  }
}
