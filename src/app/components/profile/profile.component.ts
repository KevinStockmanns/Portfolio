import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatIconModule,ButtonComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

}
