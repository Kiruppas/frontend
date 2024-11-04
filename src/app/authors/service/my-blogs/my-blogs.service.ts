import { Injectable } from '@angular/core';
import { IMyBlog } from '../../models/IMyBlog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MyBlogsService {
  private apiUrl = 'http://localhost:8080/blogbackend/api/blogs';

  constructor(private http: HttpClient) {}

  getMyBlogs(userId: number): Observable<IMyBlog[]> {
    return this.http.get<IMyBlog[]>(`${this.apiUrl}/user/${userId}`);
  }

  getBlogById(blogId: number): Observable<IMyBlog> {
    // purpose: getting the data for updation
    return this.http.get<IMyBlog>(`${this.apiUrl}/viewblog/${blogId}`);
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
