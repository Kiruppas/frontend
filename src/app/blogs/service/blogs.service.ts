import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
 
}

