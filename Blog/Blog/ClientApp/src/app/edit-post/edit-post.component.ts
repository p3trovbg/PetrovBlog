import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { stat } from 'fs';
import { json } from 'stream/consumers';
import { ContentService } from '../common/content.service';
import { PostService } from '../common/post.service';
import { IContent } from '../common/shared/content';
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
  newImagesFile: File[] = []
  targetPost?: IPostDetail;

  constructor(
    private contentService: ContentService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private postService: PostService) {
    this.editForm = this.fb.group({
      'id': [],
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
          id: this.targetPost.id,
          title: this.targetPost?.title,
          content: this.targetPost?.content,
          mainImage: this.targetPost?.mainImageUrl,
          images: this.targetPost?.images,
          videos: this.targetPost?.videos
        });
      })
  }

  editPost() {

      this.editForm.get('images')?.setValue(this.targetPost?.images);
      this.editForm.get('mainImage')?.setValue(this.targetPost?.mainImageUrl);
        this.isLoading = true;
        this.postService.edit(this.editForm).subscribe({
         next:(postId) => {
           this.router.navigate(['/detail/', postId]);
           this.isLoading = false;
         },
         error:(er) => this.errorMessage = 'Invalid edit'
       })
  };


  removeImageHandle(targetImage: any) {
    this.contentService.deleteImage(targetImage.id).subscribe(() => {
      const result = this.targetPost?.images.filter(image => image.id != targetImage.id);
      this.targetPost!.images = result!;
    })
  }

  mainImageHandle(image: any) {
    const lastedImageUrl = this.targetPost?.mainImageUrl;
    this.targetPost!.mainImageUrl = image.url;
    image.url = lastedImageUrl;
  }

  onFileChange(event: any) {
    this.contentService.uploadImages<IContent[]>([...event.target.files])
      .subscribe(x => this.targetPost?.images.push(...x))
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
