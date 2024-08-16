import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { ProfileComponent } from '../../components/profile/profile.component';
import { RouterModule } from '@angular/router';
import { UserNavComponent } from '../../components/user-nav/user-nav.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, ProfileComponent, UserNavComponent, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
