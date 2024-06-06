import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent,HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment'
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlApi: string ="";
  private tokenKey = 'auth_token';

  constructor(private http: HttpClient) {
    this.urlApi = environment.apiUrl+'/api/v1';
   }

   login(email: string, password: string) {
    return this.http.post<any>(`${this.urlApi}/login/login`, { email, password })
      .pipe(
        tap(response => {
          localStorage.setItem(this.tokenKey, response.token);
        })
      );
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn() {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
  }
}
