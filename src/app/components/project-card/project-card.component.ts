import { Component, input } from '@angular/core';
import { Project } from '../../core/models/project.model';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'project-card',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent{
  project = input.required<Project>();
}
