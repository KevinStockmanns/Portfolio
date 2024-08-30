import { Component, input } from '@angular/core';
import { Skill } from '../../core/models/skill.model';

@Component({
  selector: 'tech-item',
  standalone: true,
  imports: [],
  templateUrl: './tech-item.component.html',
  styleUrl: './tech-item.component.css'
})
export class TechItemComponent {
  tech = input.required<Skill>();
}
