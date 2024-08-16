import { Component, input } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [],
  template: `<h1>
    <div></div>
    <div>{{title()}}</div>
    <div></div>
  </h1>`,
  styles: `
    h1{
      display:grid;
      grid-template-columns: minmax(1rem, 4rem) max-content 1fr;
      align-items:center;
      gap: .5rem;
      font-size: 1.7rem;
    }
    h1 div:first-child, h1 div:last-child{
      background: var(--mainColor);
      width:100%;
      height: 2px;
      border-radius: var(--borderrMid);
    }
  `
})
export class TitleComponent {
  title = input.required<string>();
}
