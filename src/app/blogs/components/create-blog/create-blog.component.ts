import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogService } from '../../service/blogs.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create-blog.component.html',
  styles: ``,
})
export class CreateBlogComponent {
  userId: any;
  addBlogForm: FormGroup;
  categories = ['TECHNOLOGY', 'TRAVEL', 'FOOD', 'SPORTS', 'POLITICS'];

  constructor(
    private blogService: BlogService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');

    this.addBlogForm = new FormGroup({
      title: new FormControl('', [
        Validators.required
      ]),
      category: new FormControl('', Validators.required),
      content: new FormControl('', [
        Validators.required
      ]),
    });
  }

  handleAddBlog() {
    console.log(this.addBlogForm);

    this.blogService
      .addBlog(this.addBlogForm.value, this.userId)
      .subscribe((Response: any) => {
        this.toastr.success('Blog added successfully!', 'Success');
        this.resetForm();
        this.router.navigate(['/blogs']);
      });
  }

  resetForm() {
    this.addBlogForm.reset();
  }
}
