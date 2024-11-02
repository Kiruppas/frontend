import { Component, OnInit } from '@angular/core';
import { IAuthor } from './models/iauthor';
import { AuthorsService } from './service/authors.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [ RouterModule, CommonModule ],
  templateUrl: './authors.component.html',
  styles: ``
})
export class AuthorsComponent implements OnInit{
  authors: IAuthor[] = [];

  constructor(private authorsService: AuthorsService) { }

  ngOnInit(): void {
    this.authorsService.getAuthors().subscribe((response: IAuthor[]) => {
      console.log(response);
      this.authors = response;
    });
  }

}
