import { Component, OnInit } from '@angular/core';
import { IAuthor } from '../../models/iauthor';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthorsService } from '../../service/authors/authors.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-author-details',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './update-author-details.component.html',
  styles: ``,
})
export class UpdateAuthorDetailsComponent implements OnInit {
  updateUserForm: FormGroup;
  authorID!: any;
  isSaved = false;
  errorMessage: any;
  // Observable to handle async operations like the Http req to get, update the author details
  author$: Observable<IAuthor | null> = of(null);

  // FormBuilder - helper class to simplify the form creation
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private authorService: AuthorsService,
    private router: Router
  ) {
    this.updateUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]], // fields creation
    });
  }

  // to fetch and display data based on userId
  ngOnInit(): void {
    this.authorID = this.route.snapshot.paramMap.get('userId'); // retrieving userId
    if (this.authorID !== null) {
      this.author$ = this.authorService.getAuthorById(this.authorID);
      this.author$.subscribe({
        next: (author) => {
          if (author) {
            this.updateUserForm.patchValue({ // updates the form with the author's data
              username: author.username,
              email: author.email,
            });
          }
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('Error fetching author:', error);
        },
      });
    }
  }

  handleUpdateUser(): void {
    if (this.updateUserForm.valid && this.authorID !== null) {
      const updatedAuthor: Partial<IAuthor> = { // containes subset of properties
        userId: this.authorID,
        username: this.updateUserForm.value.username,
        email: this.updateUserForm.value.email,
      };

      this.authorService.updateAuthor(updatedAuthor).subscribe({ // sends http  req to backend to update the data
        next: () => {
          this.isSaved = true;
          console.log('Author updated successfully!');
          this.toastr.success('Author updated successfully!', 'Success');
          this.router.navigate(['/authors', this.authorID]); // redirects to author-details page after successfull updation
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.toastr.error('Error Updating Author!', 'Success');
          console.error('Error updating author:', error);
        },
      });
    }
  }
}
