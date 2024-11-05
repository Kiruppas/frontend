import { Component } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { MyBlogsService } from '../../service/my-blogs/my-blogs.service';
import { ToastrService } from 'ngx-toastr';
import { IMyBlog } from '../../models/IMyBlog';
import { Location } from '@angular/common';
@Component({
  selector: 'app-delete-blog',
  standalone: true,
  imports: [],
  templateUrl: './delete-blog.component.html',
  styles: ' ',
})
export class DeleteBlogComponent {
  @Input() blogId: number | undefined;
  @Input() blogTitle: string | undefined;
  @Output() deletionConfirmed = new EventEmitter<void>();

  constructor(
    private myBlogService: MyBlogsService,
    private toastr: ToastrService,
    private location: Location
  ) {
  }
  deleteBlog(): void {
    if (this.blogId !== undefined && this.blogId!==null) {
      this.myBlogService.deleteBlog(this.blogId).subscribe(
        () => {
          this.toastr.success('Deleted successfully!', 'Success');
          this.location.back();
        },
        (error) => {
          console.error('Failed to delete the blog', error);
          this.toastr.error('Failed to delete the blog', 'Error');
        }
      );
    }
  }
}
