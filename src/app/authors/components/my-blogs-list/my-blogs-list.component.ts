import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { IMyBlog } from '../../models/IMyBlog';
import { MyBlogsService } from '../../service/my-blogs/my-blogs.service';
import { response } from 'express';

@Component({
  selector: 'app-my-blogs-list',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './my-blogs-list.component.html',
  styles: ``
})
export class MyBlogsListComponent {
  myBlogs: IMyBlog[] = [];
  userId: any;


  constructor(private myBlogService: MyBlogsService,private route: ActivatedRoute) {
    // Reading the URL param
    this.userId = this.route.snapshot.paramMap.get('userId');
   }

  ngOnInit(): void {
    this.myBlogService.getMyBlogs(this.userId).subscribe((response: IMyBlog[]) => {
      this.myBlogs = response;
    });
  }

}
