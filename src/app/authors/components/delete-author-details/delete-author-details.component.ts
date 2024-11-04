import { Component } from '@angular/core';
import { AuthorsService } from '../../service/authors/authors.service';
<<<<<<< HEAD
import { ActivatedRoute, Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';


=======
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

>>>>>>> a8585d020f146fa2bf5c4c174a493aaf275dbf3a
@Component({
  selector: 'app-delete-author-details',
  standalone: true,
  imports: [],
  template: ``,
<<<<<<< HEAD
  styles: ``
=======
  styles: ``,
>>>>>>> a8585d020f146fa2bf5c4c174a493aaf275dbf3a
})
export class DeleteAuthorDetailsComponent {
  userId: any;
  author: any;
<<<<<<< HEAD
  
  constructor(private authorService: AuthorsService, private route: ActivatedRoute, private router: Router, private toastr: ToastrService) {
=======

  constructor(
    private authorService: AuthorsService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {
>>>>>>> a8585d020f146fa2bf5c4c174a493aaf275dbf3a
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
<<<<<<< HEAD
    this.authorService.deleteAuthorById(this.userId)
      .subscribe((response: any) => {
        this.author = response;
        this.router.navigate(['/authors']);
        this.toastr.success("User deleted successfully",'Success');
      })
    
  }

=======
    this.authorService
      .deleteAuthorById(this.userId)
      .subscribe((response: any) => {
        this.author = response;
        this.router.navigate(['/authors']);
        this.toastr.success('User deleted successfully', 'Success');
      });
  }
>>>>>>> a8585d020f146fa2bf5c4c174a493aaf275dbf3a
}
