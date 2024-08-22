import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skills } from '../models/skill.model';
import { Projects } from '../models/project.model';

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
}
