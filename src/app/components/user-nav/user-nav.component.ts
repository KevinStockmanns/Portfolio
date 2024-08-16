import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router, RouterModule, Routes } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'user-nav',
  standalone: true,
  imports: [RouterModule, MatIconModule],
  templateUrl: './user-nav.component.html',
  styleUrl: './user-nav.component.css'
})
export class UserNavComponent {
  rutas: Routes;
  icons: Map<string,string> = new Map([
    ['about', 'person'],
    ['resume', 'description']
  ]);

  constructor(private router:Router){
    this.rutas = this.router.config.find(el=> el.path=='' && el.hasOwnProperty('children'))?.children || [];
  }


  getIcon(path:string|undefined):string{
    if(!path)
      path = 'about';
    return this.icons.get(path) as string;
  }
}
