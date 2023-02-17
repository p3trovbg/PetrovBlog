import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private postByIdUrl = '/post/get/'
  private allUrl = '/post/all'
  private addPostUrl ='/post/add'
  private editPostUrl ='/post/edit'
  private deletePostUrl ='/post/delete'

  constructor(private httpClient: HttpClient) { 
  }

  getById(id: string): Observable<Post> {
    return this.httpClient.get<Post>(this.postByIdUrl + id);
  }

  all(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.allUrl);
  }

  add(newPost: Post): Observable<string> {
    return this.httpClient.post<string>(this.addPostUrl, newPost);
  }

  edit(editPost: Post): Observable<string> { // in interface should has id
    return this.httpClient.put<string>(this.addPostUrl, editPost);
  }

  delete(id: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(this.deletePostUrl)
  }
}


interface Post {
  id: string;
  title: string;
  mainImageUrl: string;
  summary: string;
  author: Author;
  createdOn: string;
  updatedOn: string;
}

interface Author {
  id: string;
  userName: string;
}

