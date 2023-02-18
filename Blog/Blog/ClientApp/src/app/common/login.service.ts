import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'console';
import { stringify } from 'querystring';
import { BehaviorSubject, catchError, map, Observable, Subject, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {
   private tokenName: string = 'token';
   private http: HttpClient;
   url: string = 'https://localhost:44366/identity/login';
   public isLogged = false;

  constructor(http: HttpClient) {
      this.http = http;
      this.isLogged = this.getToken() ? true : false;
   }

   login(user: any): Observable<any>{
      return this.http.post(this.url, user)
      .pipe(
         tap((x) => this.saveToken(x)),
      );
   } 

   saveToken(response: any) {
      if (response == null || response == undefined) {
         return;
      }

      const token = response.token;
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