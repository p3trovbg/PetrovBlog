import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { LoginService } from 'src/app/common/login.service';
import { PostService } from '../common/post.service';
import { IPost } from '../common/shared/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  http: HttpClient;
  posts: IPost[] = [];
  selectedPost?: IPost;
  isEmptyCollection = false;

  constructor(
    private loginService: LoginService,
     http: HttpClient,
      private postService: PostService) {
    this.http = http;
  }

  get isLogin() {
    return this.loginService.isLogged;
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.isEmptyCollection = false;
    this.postService.all<IPost[]>()
    .subscribe({
      next:(post) => this.posts = post,
      error:(ex) => this.isEmptyCollection = true,
    });
  } 
}