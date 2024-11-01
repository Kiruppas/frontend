import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user';

@Injectable({
  providedIn: 'root'
})

@Injectable({ providedIn: 'root' })
export class RegistrationService {

  private apiUrl = 'http://localhost:8080/blogbackend/api/users'; // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  registerUser(user: User): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}

