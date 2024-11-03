import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
<<<<<<< HEAD
=======
import { BlogSummary } from '../interface/blog-summary';
import { Blog } from '../interface/blogs';
>>>>>>> e1c763dac0993bf562350b71da0b20a5e1178014

@Injectable({
    providedIn: 'root'
  })

export class BlogService {

<<<<<<< HEAD
  private apiUrl = 'http://localhost:8080/blogbackend/api/blogs';

  constructor(private http: HttpClient) { }

  addBlog(formData: any, userId: number): Observable<any> {
    console.log(formData);
    return this.http.post(`${this.apiUrl}/${userId}`, formData);
  }  
 
=======
@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private apiUrl = 'http://localhost:8080/blogbackend/api/blogs';

  constructor(private http: HttpClient) {}

  getBlogs(): Observable<BlogSummary[]> {
    return this.http.get<BlogSummary[]>(this.apiUrl);
  }

  getBlog(blogId: string): Observable<Blog> {
    return this.http.get<Blog>(`${this.apiUrl}/${blogId}`);
  }
>>>>>>> e1c763dac0993bf562350b71da0b20a5e1178014
}

