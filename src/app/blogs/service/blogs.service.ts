// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface BlogSummary {
//   id: string;
//   title: string;
//   author: string;
//   category: string;
//   publishedDate: string;
// }

// export interface Blog {
//   id: string;
//   title: string;
//   author: string;
//   category: string;
//   publishedDate: string;
//   content: string;
// }

// @Injectable({
//   providedIn: 'root'
// })
// export class BlogService {
//   private apiUrl = 'http://localhost:8080/api/blogs';

//   constructor(private http: HttpClient) {}

//   getBlogs(): Observable<BlogSummary[]> {
//     return this.http.get<BlogSummary[]>(this.apiUrl);
//   }

//   getBlog(id: string): Observable<Blog> {
//     return this.http.get<Blog>(`${this.apiUrl}/${id}`);
//   }
// }

