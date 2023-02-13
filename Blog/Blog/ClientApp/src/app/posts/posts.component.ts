import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { LoginService } from 'src/common/login.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  isLogin = false;
  loginService: LoginService;
  postsUrl: string;
  baseUrl: string;
  http: HttpClient;
  posts: Post[] = [];
  selectedPost?: Post;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string, loginService: LoginService) {
    this.http = http;
    this.loginService = loginService;
    this.baseUrl = baseUrl;
    this.postsUrl = 'https://localhost:44366/post/all';

  }
  ngOnInit(): void {
    if (this.loginService.getToken() != null) {
      this.isLogin = true;
    }
    this.getAll();
  }

  getAll(): void {
    this.getPosts()
    .subscribe(posts => this.posts = posts);
  }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
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