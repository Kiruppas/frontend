import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BlogSummary } from '../interface/blog-summary';
import { Blog } from '../interface/blogs';

@Injectable({
    providedIn: 'root'
  })

export class BlogService {

  private apiUrl = 'http://localhost:8080/blogbackend/api/blogs';

  constructor(private http: HttpClient) { }

  addBlog(formData: any, userId: number): Observable<any> {
    console.log(formData);
    return this.http.post(`${this.apiUrl}/${userId}`, formData);
  }  

  getBlogs(): Observable<BlogSummary[]> {
    return this.http.get<BlogSummary[]>(this.apiUrl);
  }

  getBlog(blogId: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/viewblog/${blogId}`);
  }
 
}

