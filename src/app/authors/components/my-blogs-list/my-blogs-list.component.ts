import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IMyBlog } from '../../models/IMyBlog';
import { MyBlogsService } from '../../service/my-blogs/my-blogs.service';
import { Location } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
declare var $: any; // Declare jQuery for Bootstrap modal

@Component({
  selector: 'app-my-blogs-list',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterModule],
  templateUrl: './my-blogs-list.component.html',
  styles: ``,
})
export class MyBlogsListComponent {
  myBlogs: IMyBlog[] = [];
  userId: any;
  blogId: any;
  blogToDelete: IMyBlog | null = null; // To store the blog to delete

  constructor(
    private myBlogService: MyBlogsService,
    private route: ActivatedRoute,
    private location: Location,
    private toastr: ToastrService
  ) {
    // Reading the URL param
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.myBlogService
      .getMyBlogs(this.userId)
      .subscribe((response: IMyBlog[]) => {
        this.myBlogs = response;
        this.loadBlogs();
      });
  }
  loadBlogs(): void {
    this.myBlogService.getMyBlogs(this.userId).subscribe(
      (response: IMyBlog[]) => {
        this.myBlogs = response;
      },
      (error) => {
        console.error('Error fetching blogs', error);
        alert('Error fetching blogs.');
      }
    );
  }
  openDeleteModal(blog: IMyBlog): void {
    this.blogToDelete = blog;
    $('#deleteModal').modal('show'); // Show the modal using jQuery
  }

  closeModal(): void {
    $('#deleteModal').modal('hide'); // Hide the modal using jQuery
    this.blogToDelete = null; // Clear the blog to delete
  }
  confirmDelete(): void {
    if (this.blogToDelete) {
      this.myBlogService.deleteBlog(this.blogToDelete.blogId).subscribe(
        () => {
          this.loadBlogs(); // Refresh the list after deletion
          this.closeModal(); // Close the modal
          console.log('Deleted successfully');
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
