import { Component, input } from '@angular/core';

@Component({
  selector: 'status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.css'
})
export class StatusComponent {
  status = input.required<string|undefined>();
}
