import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { GlobalComponent } from '../global-component';
import { IPost } from './shared/post';

@Injectable({
  providedIn: 'root'
})

export class PostService {
  private url = '/post/'
  private allUrl = '/post/all'

  constructor(private httpClient: HttpClient) { 
  }

  getById<T>(id: string): Observable<T> {
    return this.httpClient.get<T>(GlobalComponent.appUrl + this.url + id);
  }

  all<T>(): Observable<T> {
    return this.httpClient.get<T>(GlobalComponent.appUrl + this.allUrl);
  }

  add(newPost: FormData): Observable<string> {
    const result = this.httpClient.post<IPost>(GlobalComponent.appUrl + this.url +'add', newPost)
    .pipe(
      map((response) => response.id)
    );
    return result;
  }

  edit(editPost: FormGroup): Observable<string> {
    return this.httpClient.put<IPost>(GlobalComponent.appUrl + this.url, editPost.value)
    .pipe(
      map((response) => response.id)
    );
  }

  delete(id: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(GlobalComponent.appUrl + this.url + id)
  }
}


