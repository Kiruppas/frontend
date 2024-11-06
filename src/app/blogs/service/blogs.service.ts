import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogSummary } from '../models/IBlogSummary';
import { Blog } from '../models/IBlogs';
import { IMyBlog } from '../../authors/models/IMyBlog';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  private apiUrl = 'http://localhost:8080/api/blogs';

  constructor(private http: HttpClient) {}

  addBlog(formData: any, userId: number): Observable<any> {
    console.log(formData);
    return this.http.post(`${this.apiUrl}/create/${userId}`, formData);
  }

  getBlogs(): Observable<BlogSummary[]> { // blog-list page
    return this.http.get<BlogSummary[]>(this.apiUrl);
  }

  getMyBlogs(userId: number): Observable<IMyBlog[]> { // blog for specific user
    return this.http.get<IMyBlog[]>(`${this.apiUrl}/user/${userId}`);
  }

  getBlog(blogId: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/view/${blogId}`);
  }

  updateBlog(blog: Partial<IMyBlog>): Observable<IMyBlog | null> {
    const url = `${this.apiUrl}/edit/${blog.blogId}`;
    return new Observable((observer) => {
      this.http.put<IMyBlog>(url, blog).subscribe({
        next: (data) => {
          observer.next(data);
          observer.complete();
        },
      });
    });
  }

  deleteBlog(blogId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete/${blogId}`);
  }
}
