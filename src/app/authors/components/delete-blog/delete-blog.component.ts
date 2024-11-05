import { Component, Input } from '@angular/core';
import { MyBlogsService } from '../../service/my-blogs/my-blogs.service';
import { ToastrService } from 'ngx-toastr';

import { Location } from '@angular/common';
@Component({
  selector: 'app-delete-blog',
  standalone: true,
  imports: [],
  template: '',
  styles: ' ',
})
export class DeleteBlogComponent {
 @Input() blogId: number | undefined;

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
          this.location.back(); // navigate back to the previous page
        },
        (error) => {
          console.error('Failed to delete the blog', error);
          this.toastr.error('Failed to delete the blog', 'Error');
        }
      );
    }
  }
}
