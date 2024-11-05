import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu-list',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu-list.component.html',
  styles: `
    .nav {
  background-color: background-color: rgb(24, 40, 80);
  padding: 8px 0;
  border-radius: 8px;
  transition: box-shadow 0.3s ease, background-color 0.3s ease; /* Add transition for smooth effect */
}


.nav-link {
  color: rgb(230, 230, 230);
  font-weight: 500;
  padding: 10px 20px;
  transition: color 0.3s ease;
}


.nav-link:hover {
  color: white;
  background-color: rgba(255, 255, 255, 0.3);
  text-decoration: none;
  border-radius: 8px;
}


.nav:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* More pronounced shadow on hover */
  background-color: rgba(24, 40, 80, 0.9); /* Slightly darker background on hover */
}



.nav-link.active {
  color: white;
  text-decoration: underline;
  border-radius: 8px;
}



/* Optional: Add a subtle shadow for depth (when not hovering) */
.nav {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}


/* Optional: Improve responsiveness on smaller screens */
@media (max-width: 768px) {
  .nav-item {
    margin: 5px 0;
  }
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
