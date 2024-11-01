import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from '../service/registration.service';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule, HttpClientModule ],
  templateUrl: './registration.component.html',
  styles: ``
})


export class RegistrationComponent {
  addUserForm: FormGroup;
  isSaved = false;
  registrationSuccess = false;
  registrationError = '';
  userService: any;
  

  constructor(/*private toastr: ToastrService*/ /*private registraionService: RegistrationService*/)  {
    this.addUserForm = new FormGroup({
      name: new FormControl('', Validators.required), 
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  handleAddUser(){
    if (this.addUserForm.valid) {
    console.log(this.addUserForm.value);
    // TOASTR
    // send the data to the service
    // this.employeesService.addEmployee(this.addUserForm.value).subscribe((response: any) => {
    //   console.log(response);
    //   this.isSaved=true;
    // })
    // this.simulateServiceCall();
    // } else {
    //   this.toastr.error('Please fill out the form correctly.', 'Error'); //Show error if form is invalid
    // }

    //  INTERGRATION
    // const user = this.addUserForm.value;
    //   this.userService.registerUser(user).subscribe({
    //     next: (response: any) => {
    //       this.registrationSuccess = true;
    //       this.registrationError = '';
    //       console.log('Registration successful:', response);
    //       // Optionally, redirect to a login page or show a success message.
    //     },
    //     error: (error: { error: { message: string; }; }) => {
    //       this.registrationSuccess = false;
    //       this.registrationError = error.error.message || 'Registration failed. Please try again.';
    //       console.error('Registration error:', error);
    //     }
    //   });
    // }
  }

  // TOASTR
  // simulateServiceCall() {
  //   // Replace this with your actual service call
  //   setTimeout(() => {
  //     this.isSaved = true;
  //     this.toastr.success('User registered successfully!', 'Success');
  //   }, 1000); // Simulate a 1-second delay
  // }

  
}
}


