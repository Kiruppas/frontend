import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from '../models/iuser';


@Injectable({ providedIn: 'root' })
export class RegistrationService {

  private apiUrl = 'http://localhost:8080/blogbackend/api/users';

  constructor(private http: HttpClient) {}

  registerUser(user: IUser): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }
}

