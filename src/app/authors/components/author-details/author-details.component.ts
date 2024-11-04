import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AuthorsService } from '../../service/authors/authors.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-author-details',
  standalone: true,
  imports: [
    RouterModule,  
    CommonModule
  ],
  templateUrl: './author-details.component.html',
  styles: ``
})
export class AuthorDetailsComponent {
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

