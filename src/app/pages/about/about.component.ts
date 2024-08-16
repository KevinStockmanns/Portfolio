import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TitleComponent } from '../../components/title/title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  constructor(protected title:Title){

  }
}
