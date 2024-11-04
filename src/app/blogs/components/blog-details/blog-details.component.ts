import { Component } from '@angular/core';
import { Blog } from '../../interface/blogs';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../service/blogs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container" style="margin-top: 40px;" *ngIf="blog">
      <h2>{{ blog.title }}</h2>
      <p><strong>Author:</strong> {{ blog.user.username }}</p>
      <p><strong>Category:</strong> {{ blog.category }}</p>
      <p><strong>Published:</strong> {{ blog.createdAt }}</p>
      <hr />
      <div [innerHTML]="blog.content"></div>
    </div>
  `,
  styles: ``,
})
export class BlogDetailsComponent {
  blog: Blog | undefined;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    const blogId = this.route.snapshot.paramMap.get('blogId');
    if (blogId) {
      this.blogService.getBlog(blogId).subscribe((data) => {
        this.blog = data;
        if (this.blog) {
          // Convert the createdAt string to a Date object
          this.blog.createdAt = new Date(
            this.blog.createdAt as unknown as string
          );
        }
      });
    }
  }
}
