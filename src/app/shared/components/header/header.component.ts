import { Component } from '@angular/core';
import { MenuListComponent } from '../menu-list/menu-list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MenuListComponent],
  template: `
    <nav class="navbar navbar-expand">
      <div
        class="container-fluid fixed-top"
        style="background-color: rgb(24, 40, 80);"
      >
        <a class="navbar-brand app-name text-white" href="#"><b>TheBlogHub</b></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText" style="margin-left: 180px;">
          <app-menu-list></app-menu-list>
        </div>
      </div>
    </nav>
  `,
  styles: `
  .app-name {
   
    padding: 0px 8px;
}
  `,
})
export class HeaderComponent {}
