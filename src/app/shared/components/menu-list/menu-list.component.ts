import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-list.component.html',
  styles: `
    .active{
      color:black;
    }
`,
})
export class MenuListComponent {
  menuListItems = [
    { label: 'Home', link: '/', exact: true },
    { label: 'Registration', link: '/registration', exact: false },
    { label: 'Blogs', link: '/blogs', exact: false },
    { label: 'About Us', link: '/about', exact: false },
    { label: 'Authors', link: '/authors', exact: false },
  ];
}
