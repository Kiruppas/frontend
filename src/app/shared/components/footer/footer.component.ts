import { Component } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuListComponent],
  template: `
    <footer
      class="text-center" style="background-color: rgb(24, 40, 80);">
      <app-menu-list></app-menu-list>
      <p class="text-light p-4">
        Copyright 2024 | Blog Management
      </p>
    </footer>
  `,
  styles: `
`,
})
export class FooterComponent {}
