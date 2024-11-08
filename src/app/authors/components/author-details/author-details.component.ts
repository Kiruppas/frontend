import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AuthorsService } from '../../service/authors/authors.service';
import { IAuthor } from '../../models/IAuthor';
import { ToastrService } from 'ngx-toastr'; // Import ToastrService
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './author-details.component.html',
  styles: [],
})
export class AuthorDetailsComponent implements OnInit {
  userId: any;
  author: IAuthor | null = null; // Use IAuthor for better type safety
  isLoading: boolean = true; // Add loading indicator

  constructor(
    private authorService: AuthorsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService // Inject ToastrService
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('userId');
    if (this.userId) {
      this.authorService.getAuthorById(this.userId).subscribe({
        next: (response: IAuthor) => {
          this.author = response;
          this.isLoading = false;
        },
        error: (error) => {
          this.toastr.error('Error fetching author details.', 'Error'); // Handle errors
          this.isLoading = false;
        }
      });
    } else {
      this.isLoading = false;
      this.toastr.warning('Invalid user ID.', 'Warning'); // Handle invalid userId
    }
  }

  deleteAuthor(): void {
    if (this.userId) {
      this.authorService.deleteAuthorById(this.userId).subscribe({
        next: () => {
          this.toastr.success('User deleted successfully', 'Success');
          this.router.navigate(['/authors']);
        },
        error: (error) => {
          this.toastr.error('Error deleting author.', 'Error'); // Handle errors
        }
      });
    }
  }
}
