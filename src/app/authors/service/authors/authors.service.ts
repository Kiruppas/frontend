import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAuthor } from '../../models/IAuthor';

@Injectable({
  providedIn: 'root',
})
export class AuthorsService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getAuthors(): Observable<IAuthor[]> {
    return this.http.get<IAuthor[]>(this.apiUrl);
  }

  addAuthor(formData: any) {
    console.log(formData);
    return this.http.post(this.apiUrl, formData);
  }

  getAuthorById(userId: number): Observable<IAuthor> {
    return this.http.get<IAuthor>(`${this.apiUrl}/${userId}`);
  }

  updateAuthor(author: Partial<IAuthor>): Observable<IAuthor | null> {
    // Partial<IAuthor> object contains only the username and email
    const url = `${this.apiUrl}/edit/${author.userId}`;
    return new Observable((observer) => {
      this.http.put<IAuthor>(url, author).subscribe({
        next: (data) => {
          observer.next(data);
          observer.complete(); // signals completion of emiting values
        },
      });
    });
  }

  deleteAuthorById(userId: number): Observable<IAuthor> {
    return this.http.delete<IAuthor>(`${this.apiUrl}/delete/${userId}`);
  }
}
