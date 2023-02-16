import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService{
   private tokenName: string = 'token';
   private http: HttpClient;
   url: string = 'https://localhost:44366/identity/login';
   public isLogged = false;

  constructor(http: HttpClient) {
      this.http = http;
      this.isLogged = this.getToken() ? true : false;
   }

   login(user: any): Observable<any> {
    return this.http.post(this.url, user)
    .pipe(
      map((x) => this.saveToken(x)));
   }

   saveToken(token: any) {
      localStorage.setItem(this.tokenName, token);
      this.isLogged = true;
   }

   getToken() {
      return localStorage.getItem(this.tokenName);
   }

   logout(): void {
      localStorage.removeItem(this.tokenName);
      this.isLogged = false;
   }
}
