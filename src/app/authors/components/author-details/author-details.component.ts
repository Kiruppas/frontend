import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthorsService } from '../../service/authors.service';
import { UpdateAuthorDetailsComponent } from '../update-author-details/update-author-details.component';
import { IAuthor } from '../../models/iauthor';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [
    RouterModule, UpdateAuthorDetailsComponent, CommonModule
  ],
  templateUrl: './author-details.component.html',
  styles: ``
})
export class AuthorDetailsComponent {
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
