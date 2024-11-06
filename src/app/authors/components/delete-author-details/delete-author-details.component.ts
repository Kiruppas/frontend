import { Component } from '@angular/core';
import { AuthorsService } from '../../service/authors/authors.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-delete-author-details',
  standalone: true,
  imports: [],
  template: ``,
  styles: ``,
})
export class DeleteAuthorDetailsComponent {
  userId: any;
  author: any;

  constructor(
    private authorService: AuthorsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.authorService
      .deleteAuthorById(this.userId)
      .subscribe((response: any) => {
        this.author = response;
        this.router.navigate(['/authors']);
        this.toastr.success('User deleted successfully', 'Success');
      });
  }
}
