import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GlobalComponent } from '../global-component';
import { IContent } from './shared/content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private imageUrl = '/content'
  constructor(private httpClient: HttpClient) { }
  HttpUploadOptions = {
    headers: new HttpHeaders({ "Content-Type": "undefined" })
  }

  uploadImages<T>(contentFiles: File[]) : Observable<T> {
    const form = new FormData();
    contentFiles.forEach((file) => {
      form.append('contentFiles', file);
    })

    return this.httpClient.post<T>(GlobalComponent.appUrl + this.imageUrl, form);
  }

  deleteImage(id: string): Observable<unknown> {
    return this.httpClient.delete<unknown>(GlobalComponent.appUrl + this.imageUrl + `/${id}`)
  }
}
