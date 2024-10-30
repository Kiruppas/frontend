import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './blog-list.component.html',
  styles: ``
})
export class BlogListComponent {
  
}
