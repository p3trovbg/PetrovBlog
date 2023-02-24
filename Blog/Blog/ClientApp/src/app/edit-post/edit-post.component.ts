import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../common/post.service';
import { IPostDetail } from '../common/shared/post-details';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {
  editForm: FormGroup;
  errorMessage = '';
  isLoading = false;
  imageUrls: string[] = [];
  targetPost?: IPostDetail;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postService: PostService) {
      this.editForm = this.fb.group({
        'title': ['', [Validators.required]],
        'content': ['', [Validators.required]],
        'mainImage': ['', [Validators.required]],
        'images': [''],
        'videos': [''],
      })
  }

  ngOnInit(): void {
      this.getPost();
  }

  getPost() {
    const postId = this.route.snapshot.paramMap.get('id');
    if (postId == null) {
      return;
    }

    this.postService.getById<IPostDetail>(postId!)
    .subscribe((post) => {
      this.targetPost = post;
      this.editForm.setValue({
        title: this.targetPost?.title,
        content: this.targetPost?.content,
        mainImage: this.targetPost?.mainImageUrl,
        images: this.targetPost?.images,
        videos: this.targetPost?.videos});
    })
  }

  editPost() {}


  mainImageHandle(image: string) {
    this.targetPost!.mainImageUrl = image;
    this.editForm.get('mainImage')?.setValue(image);
  removeImageHandle(targetImage: any) {
    this.contentService.deleteImage(targetImage.id).subscribe(() => {
      const result = this.targetPost?.images.filter(image => image.id != targetImage.id);
      this.targetPost!.images = result!;
    })
  }

  onFileChange(event: any) {

  }

  isSelected(image: string): boolean {
    return image === this.targetPost?.mainImageUrl;
  }


  get username() {
    return this.editForm.get('title');
  }
  
  get content() {
    return this.editForm.get('content');
  }

  get mainImage() {
    return this.editForm.get('mainImage');
  }

  get images() {
    return this.editForm.get('images');
  }

  get videos() {
    return this.editForm.get('videos');
  }
}
