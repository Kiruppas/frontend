import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IAuthor } from '../../models/iauthor';
import { AuthorsService } from '../../service/authors.service';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [ 
             RouterModule, 
             CommonModule 
           ],
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
