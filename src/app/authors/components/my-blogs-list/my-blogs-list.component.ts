import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IMyBlog } from '../../models/IMyBlog';
import { BlogService } from '../../../blogs/service/blogs.service';
import { ToastrService } from 'ngx-toastr';
import { Location } from '@angular/common';
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
  selectedBlogId: number | undefined;
  userId: any;
  blogId: any;
  blogToDelete: IMyBlog | null = null;

  

  constructor(
    private blogService: BlogService, private location: Location,
    private route: ActivatedRoute, private toastr: ToastrService
  ) {
    // Reading the URL param
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.blogService
      .getMyBlogs(this.userId)
      .subscribe((response: IMyBlog[]) => {
        this.myBlogs = response;
        this.loadBlogs();
      });
  }

  loadBlogs(): void {
    this.blogService.getMyBlogs(this.userId).subscribe(
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
      this.blogService.deleteBlog(this.blogToDelete.blogId).subscribe(
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
