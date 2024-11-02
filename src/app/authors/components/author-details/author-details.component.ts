import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthorsService } from '../../service/authors.service';

@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './author-details.component.html',
  styles: ``
})
export class AuthorDetailsComponent {
  authorId: any;
  author: any;

  constructor(private authorService: AuthorsService, private route: ActivatedRoute) {
    this.authorId = this.route.snapshot.paramMap.get('userId');
  }

  ngOnInit(): void {
    this.authorService.getAuthorById(this.authorId)
      .subscribe((response: any) => {
        this.author = response;
      })
    
  }

}
