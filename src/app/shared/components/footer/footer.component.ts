import { Component } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MenuListComponent],
  template: `
    <footer
      class="text-center fixed-bottom"
      style="background-color: antiquewhite;"
    >
      <app-menu-list></app-menu-list>
      <p class="copyright" style="color: black;">
        Copyright 2024 | Blog Management
      </p>
      <br />
    </footer>
  `,
  styles: `
`,
})
export class FooterComponent {}
