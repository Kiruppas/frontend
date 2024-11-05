import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IMyBlog } from '../../models/IMyBlog';
import { MyBlogsService } from '../../service/my-blogs/my-blogs.service';
import { DeleteBlogComponent } from '../delete-blog/delete-blog.component';

@Component({
  selector: 'app-my-blogs-list',
  standalone: true,
  imports: [RouterModule, CommonModule, RouterModule, DeleteBlogComponent],
  templateUrl: './my-blogs-list.component.html',
  styles: ``,
})
export class MyBlogsListComponent {
  myBlogs: IMyBlog[] = [];
  selectedBlogId: number | undefined;
  userId: any;
  blogId: any;

  @ViewChild('deleteComponent') deleteComponent!: DeleteBlogComponent;

  constructor(
    private myBlogService: MyBlogsService,
    private route: ActivatedRoute
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
  deleteBlog(blogId: number): void {
    this.selectedBlogId = blogId;
    this.deleteComponent.deleteBlog(); //call the method
  }
}
