import { Component } from '@angular/core';
import { Blog } from '../../models/IBlogs';
import { ActivatedRoute } from '@angular/router';
import { BlogService } from '../../service/blogs.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="margin: 50px;">
    <div class="container" style="margin-top: 40px; height:500px;" *ngIf="blog">
      <h2 style="color: #00095b;">{{ blog.title }}</h2>
      <p style="color: white ;"><strong style="color: #00095b;">Author:</strong> {{ blog.user.username }}</p>
      <p style="color: white ;"><strong style="color: #00095b;">Category:</strong> {{ blog.category }}</p>
      <p style="color: white ;"><strong style="color: #00095b;">Published:</strong> {{ blog.createdAt }}</p>
      <b><hr /></b>
      <div style="color: white" [innerHTML]="blog.content"></div>
    </div>
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
        console.log(this.blog);
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
