import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [ HttpClientModule, CommonModule ],
  templateUrl: './my-profile.component.html',
  styles: ``
})
export class MyProfileComponent implements OnInit{

  users: any;

  constructor(private http: HttpClient) {}

  ngOnInit(){
    this.http.get("http://localhost:8080/blogbackend/api/users").subscribe({
      next: (data) => this.users = data,
      error: (error) => console.error('Error fetching data:', error) //Add error handling
    });
  
    }
}
