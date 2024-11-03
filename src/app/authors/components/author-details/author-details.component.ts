import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { AuthorsService } from '../../service/authors/authors.service';
=======
import { AuthorsService } from '../../service/authors.service';
import { UpdateAuthorDetailsComponent } from '../update-author-details/update-author-details.component';
import { IAuthor } from '../../models/iauthor';
import { CommonModule } from '@angular/common';

>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [
<<<<<<< HEAD
    RouterModule
=======
    RouterModule, UpdateAuthorDetailsComponent, CommonModule
>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d
  ],
  templateUrl: './author-details.component.html',
  styles: ``
})
export class AuthorDetailsComponent {
<<<<<<< HEAD
  userId: any;
  author: any;

  constructor(private authorService: AuthorsService, private route: ActivatedRoute) {
    this.userId = this.route.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.authorService.getAuthorById(this.userId)
      .subscribe((response: any) => {
        this.author = response;
      })
    
  }

}
=======
  authorId: any;
  author: IAuthor | undefined;

  constructor(private authorService: AuthorsService, private route: ActivatedRoute) {
    this.authorId = this.route.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.authorService.getAuthorById(this.authorId).subscribe((response: IAuthor) => {
      this.author = response;
    });
  }
}

>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d
