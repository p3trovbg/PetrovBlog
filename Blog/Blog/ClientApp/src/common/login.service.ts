import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService{
  private tokenName: string = 'token';
  isLogin = false;
  private http: HttpClient;
  url: string = 'https://localhost:44366/identity/login';

  constructor(http: HttpClient) {
      this.http = http;
   }

   login(user: any): Observable<any> {
    return this.http.post(this.url, user)
   }

   saveToken(token: any) {
      localStorage.setItem(this.tokenName, token);
      this.isLogin = true;
   }

   getToken() {
      return localStorage.getItem(this.tokenName);
   }

   logout(): void {
      localStorage.removeItem(this.tokenName);
      this.isLogin = false; 
   }
}
