import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ ReactiveFormsModule, CommonModule ],
  templateUrl: './registration.component.html',
  styles: ``
})


export class RegistrationComponent {
  addUserForm: FormGroup;
  isSaved = false;

  constructor(/*private toastr: ToastrService*/)  {
    this.addUserForm = new FormGroup({
      name: new FormControl('', Validators.required), 
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  handleAddUser(){
    if (this.addUserForm.valid) {
    console.log(this.addUserForm.value);
    // send the data to the service
    // this.employeesService.addEmployee(this.addUserForm.value).subscribe((response: any) => {
    //   console.log(response);
    //   this.isSaved=true;
    // })
    // this.simulateServiceCall();
    // } else {
    //   this.toastr.error('Please fill out the form correctly.', 'Error'); //Show error if form is invalid
    // }
    }
  }

  // simulateServiceCall() {
  //   // Replace this with your actual service call
  //   setTimeout(() => {
  //     this.isSaved = true;
  //     this.toastr.success('User registered successfully!', 'Success');
  //   }, 1000); // Simulate a 1-second delay
  // }
}


