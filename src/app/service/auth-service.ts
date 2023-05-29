import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {UserLoginView} from "../model/user-login-view";
import {UserInfo} from "../model/user-info";
import {UserRegisterView} from "../model/user-register-view";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const AUTH_API = 'http://localhost:8080/auth/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  login(user: UserLoginView): Observable<any> {
    return this.http.post<UserInfo>(AUTH_API + 'login', JSON.stringify(user), httpOptions);
  }

  register(user: UserRegisterView): Observable<any> {
    return this.http.post(AUTH_API + 'register', JSON.stringify(user), httpOptions);
  }

  logout(): Observable<any> {
    return this.http.post(AUTH_API + 'logout', { }, httpOptions);
  }
}
