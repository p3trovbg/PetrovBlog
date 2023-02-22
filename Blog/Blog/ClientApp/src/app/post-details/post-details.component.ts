import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginService } from '../common/login.service';
import { PostService } from '../common/post.service';
import { IPostDetail } from '../common/shared/post-details';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
  private postId: any;
  post?: IPostDetail;
  errorMessage?: string;
  subscription?: Subscription;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private loginService: LoginService) {
    this.postId = this.activatedRoute.snapshot.paramMap.get('id');
     }

     get isLogin() {
       return this.loginService.isLogged;
     }
     
  ngOnInit(): void {
    this.subscription = this.postService.getById<IPostDetail>(this.postId)
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

  ngOnDestroy(): void {
      this.subscription?.unsubscribe();
  }

  deleteHandle(id: string) {
    this.postService.delete(id)
    .subscribe(() => this.router.navigateByUrl('/posts'));
  }
}

