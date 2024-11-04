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
        style="background-color: antiquewhite;"
      >
        <a class="navbar-brand app-name" href="#">Blog Management</a>
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
        <div class="collapse navbar-collapse" id="navbarText">
          <app-menu-list></app-menu-list>
        </div>
      </div>
    </nav>
  `,
  styles: `
  .app-name {
    color: #00095b;
    padding: 0px 10px;
}
`,
})
export class HeaderComponent {}
