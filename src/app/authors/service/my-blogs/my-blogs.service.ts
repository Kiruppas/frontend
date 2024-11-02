import { Injectable } from '@angular/core';
import { IMyBlog } from '../../models/IMyBlog';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MyBlogsService {

  private apiUrl = "http://localhost:8080/blogbackend/api/blogs";

  constructor(private http: HttpClient) { }

  getMyBlogs(userId: number): Observable<IMyBlog[]> {
    return this.http.get<IMyBlog[]>(`${this.apiUrl}/user/${userId}`);
  }
}
