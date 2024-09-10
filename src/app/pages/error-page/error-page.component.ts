import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [MatIconModule, ButtonComponent],
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {
  message = 'Parece que la página que quieres visitar no se encuentra.';
  icon:string = "sentiment_very_dissatisfied";
  
  constructor(private router: Router){
    if(router.url == '/offline'){
      this.icon = 'wifi_off';
      this.message = 'Parece que no tienes conexión a internet.';
    }else if(router.url == '/project-error'){
      this.message = 'Ocurrio un problema al obtener información del proyecto.'
    }
  }
}
