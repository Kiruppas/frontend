import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-blog',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './create-blog.component.html',
  styles: `
    
  `
})
export class CreateBlogComponent {
  blogList: FormGroup;
  categories = ['TECHNOLOGY', 'TRAVEL', 'FOOD', 'SPORTS', 'POLITICS']; // Define categories

  constructor(private fb: FormBuilder) {
    this.blogList = this.fb.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      content: ['', [Validators.required, Validators.minLength(10)]]
    });


  }
}
