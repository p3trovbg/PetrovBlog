import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  HttpUploadOptions = {
    headers: new HttpHeaders({ "Content-Type": "multipart/form-data" })
  }

  getById<T>(id: string): Observable<T> {
    return this.httpClient.get<T>(GlobalComponent.appUrl + this.url + id);
  }

  all<T>(): Observable<T> {
    return this.httpClient.get<T>(GlobalComponent.appUrl + this.allUrl);
  }

  add(newPost: FormData): Observable<string> {
    console.log(JSON.stringify(newPost));
    return this.httpClient.post<string>(GlobalComponent.appUrl + this.url +'add', newPost);
  }

  edit(editPost: IPost): Observable<string> { // should has interface with id
    return this.httpClient.put<string>(GlobalComponent.appUrl + this.url, editPost);
  }

  delete(id: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(GlobalComponent.appUrl + this.url + id)
  }
}


