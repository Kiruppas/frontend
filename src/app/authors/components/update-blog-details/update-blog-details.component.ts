import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable, catchError, of, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { IMyBlog } from '../../models/IMyBlog';
import { BlogService } from '../../../blogs/service/blogs.service';


@Component({
  selector: 'app-update-blog-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './update-blog-details.component.html',
  styles: [],
})
export class UpdateBlogDetailsComponent implements OnInit {
  updateBlogForm: FormGroup;
  blogId!: any;
  isSaved = false;
  errorMessage: string | null = null;
  blog: Observable<IMyBlog | null> = of(null);
  categories = ['TECHNOLOGY', 'TRAVEL', 'FOOD', 'SPORTS', 'POLITICS'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private blogService: BlogService,
    private toastr: ToastrService
  ) {
    this.updateBlogForm = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      content: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.blogId = this.route.snapshot.paramMap.get('blogId');
    if (this.blogId !== null) {
      this.blog = this.blogService.getBlog(this.blogId);
      this.blog.subscribe({
        next: (blog) => {
          if (blog) {
            this.updateBlogForm.patchValue({
              title: blog.title,
              category: blog.category,
              content: blog.content,
            });
          }
        },
      });
    }
  }
  handleUpdateBlog(): void {
    if (this.updateBlogForm.valid && this.blogId !== null) {
      const updatedBlog: Partial<IMyBlog> = {
        blogId: this.blogId,
        title: this.updateBlogForm.value.title,
        category: this.updateBlogForm.value.category,
        content: this.updateBlogForm.value.content,
      };

      this.blogService.updateBlog(updatedBlog).subscribe({
        next: () => {
          this.isSaved = true;
          console.log('Blog updated successfully!');
          this.toastr.success('Blog updated successfully!', 'Success');
          this.router.navigate(['/blogs']);
        },
        error: (error: { message: any; }) => {
          this.errorMessage = `Error updating blog: ${error.message}`;
          this.toastr.error(this.errorMessage, 'Error');
          console.error('Error updating blog:', error);
        },
      });
    }
  }
}
