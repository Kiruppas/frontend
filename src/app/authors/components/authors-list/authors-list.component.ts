import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { IAuthor } from '../../models/iauthor';
import { AuthorsService } from '../../service/authors.service';
>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IAuthor } from '../../models/iauthor';
import { AuthorsService } from '../../service/authors/authors.service';

@Component({
  selector: 'app-authors',
  standalone: true,
<<<<<<< HEAD
  imports: [ 
             RouterModule, 
             CommonModule 
           ],
=======
  imports: [ RouterModule, CommonModule ],
>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d
  templateUrl: './authors-list.component.html',
  styles: ``
})
export class AuthorsComponent implements OnInit{
  authors: IAuthor[] = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((response: IAuthor[]) => {
      this.authors = response;
      console.log(this.authors);
    });
  }

}
