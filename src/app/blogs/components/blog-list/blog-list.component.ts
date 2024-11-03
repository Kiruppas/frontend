import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BlogService } from '../../service/blogs.service';
import { BlogSummary } from '../../interface/blog-summary';
import { Blog } from '../../interface/blogs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styles: ``
})
export class BlogListComponent {
  blogs: BlogSummary[] = [];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getBlogs().subscribe((data) => {
      console.log('Fetched blogs:', data); // Log the fetched data
      this.blogs =data.map(blog => {
        // Assuming the backend sends a date string in a recognizable format
        blog.createdAt = new Date(blog.createdAt as unknown as string); // Convert to Date
        return blog;
      });
    });
  }

  viewBlog(blogId: string) {
    console.log('Navigating to blog with ID:', blogId);
    this.router.navigate(['/blogs', blogId]);
  }
}
  
