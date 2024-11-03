import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/components/header/header.component';
import { MenuListComponent } from './shared/components/menu-list/menu-list.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BlogListComponent } from './blogs/components/blog-list/blog-list.component';
import { BlogDetailsComponent } from './blogs/components/blog-details/blog-details.component';
import { AboutComponent } from './about/about.component';
import { MyProfileComponent } from './my-profile/my-profile.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MenuListComponent, FooterComponent, HomeComponent,BlogListComponent,BlogDetailsComponent,AboutComponent,MyProfileComponent 
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
