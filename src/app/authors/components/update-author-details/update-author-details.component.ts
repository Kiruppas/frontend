import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IAuthor } from '../../models/iauthor';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { AuthorsService } from '../../service/authors/authors.service';
import { Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-author-details',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, RouterModule ],
  templateUrl: './update-author-details.component.html',
  styles: ``
})
export class UpdateAuthorDetailsComponent implements OnInit{

  updateUserForm: FormGroup;
  authorID!: any;
  errorMessage: any;
  author$: Observable<IAuthor | null> = of(null);

  constructor(private fb: FormBuilder, private route: ActivatedRoute, 
    private authorService: AuthorsService, private router: Router,  private toastr: ToastrService) {
    this.updateUserForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {
    this.authorID = this.route.snapshot.paramMap.get('userId');
    if (this.authorID !== null) {
      this.author$ = this.authorService.getAuthorById(this.authorID);
      this.author$.subscribe({
        next: (author) => {
          if (author) {
            this.updateUserForm.patchValue({
              username: author.username,
              email: author.email
            });
          }
        },
        error: (error) => {
          this.errorMessage = error.message;
          console.error('Error fetching author:', error);
        }
      });
    }
  }

  handleUpdateUser(): void {
    if (this.updateUserForm.valid && this.authorID !== null) {
      const updatedAuthor: Partial<IAuthor> = {
        userId: this.authorID,
        username: this.updateUserForm.value.username,
        email: this.updateUserForm.value.email
      };

      this.authorService.updateAuthor(updatedAuthor).subscribe({
        next: () => {
          this.toastr.success('User updated successfully!', 'Success');
          console.log('Author updated successfully!');
          this.router.navigate(['/authors', this.authorID]); // redirects to author-details page after successfull updation
        },
        error: (error) => {
          this.errorMessage = error.message;
          this.toastr.error('Error updating author', 'Success');
          console.error('Error updating author:', error);
        }
      });
    }
  }
}