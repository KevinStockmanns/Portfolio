import { Component, input, InputSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  type: InputSignal<string> = input('simple');
  link = input<string>();
  text = input.required<string>()
  icon = input.required<string>();



  isRouterLink(){
    return !this.link()?.includes('.');
  }
}
