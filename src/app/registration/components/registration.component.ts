import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { RegistrationService } from '../service/registration.service';
import { IUser } from '../models/iuser';


//Custom Validator for special characters
function specialCharValidator(control: AbstractControl): { [key: string]: boolean } | null {
  const password = control.value;
  if (password && !/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password)) {
    return { specialChar: true };
  }
  return null;
}




@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, HttpClientModule],
  templateUrl: './registration.component.html',
  styles: [],
})
export class RegistrationComponent {
  addUserForm: FormGroup;
  isSaved = false;
  registrationSuccess = false;
  registrationError = '';


  constructor(
    private registrationService: RegistrationService,
    private toastr: ToastrService
  ) {
    this.addUserForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        specialCharValidator,
      ]),
    });
  }


  handleAddUser() {
    if (this.addUserForm.valid) {
      const user: IUser = this.addUserForm.value;
      this.registrationService.registerUser(user).subscribe({
        next: (response: any) => {
          this.registrationSuccess = true;
          this.registrationError = '';
          console.log('Registration successful:', response);
          this.toastr.success('User added successfully!', 'Success');
          this.resetForm();
        },
        error: (error: any) => {
          this.registrationSuccess = false;
          this.registrationError =
            error.error?.message || 'Registration failed. Please try again.';
          this.toastr.error(this.registrationError, 'Error');
          console.error('Registration error:', error);
        },
      });
    }
  }


  resetForm() {
    this.addUserForm.reset();
    this.registrationSuccess = false;
    this.registrationError = '';
  }
}

