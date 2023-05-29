import {Component, OnInit} from '@angular/core';
import {UserLoginView} from "../model/user-login-view";
import {StorageService} from "../service/storage-service";
import {AuthService} from "../service/auth-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null,
    password: null,
  };
  roles: string[] = [];

  errorMessage = '';
  isLoggedIn = false;

  routerLink = "/receptai-list";

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    let user: UserLoginView = {
      email: this.form.email,
      password: this.form.password
    }

    this.authService.login(user).subscribe({
      next: data => {
        this.storageService.saveUser(data);
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.moveToHome();
      },
      error: err => {
        this.errorMessage = err.error.message;
      }
    });
  }

  moveToHome(): void {
    window.location.href=this.routerLink;
  }

}
