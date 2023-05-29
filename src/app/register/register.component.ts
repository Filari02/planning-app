import { Component } from '@angular/core';
import {AuthService} from "../service/auth-service";
import {UserRegisterView} from "../model/user-register-view";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  form: any = {
    name: null,
    email: null,
    password: null,
    password2: null,
  };

  isSuccessful = false;
  errorMessage = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.form.password != this.form.password2) {
      this.errorMessage = "passwords must match"
    }

    let user: UserRegisterView = {
      name: this.form.name,
      email: this.form.email,
      password: this.form.password,
    };

    this.authService.register(user).subscribe({
      next: data => {
        this.isSuccessful = true;
        this.errorMessage = "";
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }
}
