import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from '../common/login.service';
import { PostService } from '../common/post.service';
import { IPostDetail } from '../common/shared/post-details';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  private postId: any;
  post?: IPostDetail;
  errorMessage?: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private postService: PostService,
    private loginService: LoginService) {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
     }

     get isLogin() {
       return this.loginService.isLogged;
     }
     
  ngOnInit(): void {
    this.postService.getById<IPostDetail>(this.postId)
      .subscribe( {
        next: (post: IPostDetail) => {
          this.post = post
          this.post.images.map((x) => {
            x.image = x.url,
            x.thumbImage = x.url
          })
        },
        error: (err: any) => this.errorMessage = err.error,
      })
  }
}

