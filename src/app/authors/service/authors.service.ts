import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../models/iauthor';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl = "http://localhost:8080/blogbackend/api/users";

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.apiUrl);
  }

  getAuthorById(userId: any) {
    return this.http.get(`${this.apiUrl}/${userId}`);
  }
}
