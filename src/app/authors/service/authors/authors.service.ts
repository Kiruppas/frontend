import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../../models/iauthor';

@Injectable({
  providedIn: 'root'
})
export class AuthorsService {

  private apiUrl = "http://localhost:8080/blogbackend/api/users";

  constructor(private http: HttpClient) { }

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.apiUrl);
  }

<<<<<<< HEAD:src/app/authors/service/authors/authors.service.ts
  getAuthorById(userId: any) {
    return this.http.get(`${this.apiUrl}/${userId}`);
=======
  addAuthor(formData: any) {
    console.log(formData);
    return this.http.post(this.apiUrl, formData);
  }

  getAuthorById(userId: number): Observable<IAuthor> {
    return this.http.get<IAuthor>(`${this.apiUrl}/${userId}`);
>>>>>>> 063f9905e27a4680144e27906b0d24d41701e44d:src/app/authors/service/authors.service.ts
  }
  

  updateAuthor(author: Partial<IAuthor>): Observable<IAuthor | null> { // Partial<IAuthor> object contains only the username and email
    const url = `${this.apiUrl}/edit/${author.userId}`;
    return new Observable(observer => {
      this.http.put<IAuthor>(url, author).subscribe({
        next: data => {
          observer.next(data);
          observer.complete();
        }
      });
    });
  }
}