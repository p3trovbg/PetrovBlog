import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { error } from 'console';
import { PostService } from '../common/post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  createForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  selectedImageIdx: number = 0;
  selectedElement: any;
  imageFiles?: File[] = [];
  imageUrls?: any[] = [];

  constructor(private router: Router ,private fb: FormBuilder, private postService: PostService) {
    this.createForm = this.fb.group({
      'title': ['', [Validators.required]],
      'content': ['', [Validators.required]],
      'mainImage': ['', [Validators.required]],
      'images': [''],
      'videos': [''],
    })
  }

  createPost() {
    const newPost = new FormData();
    newPost.append('title', this.createForm.value.title);
    newPost.append('content', this.createForm.value.content);
    newPost.append('mainImage', this.createForm.value.mainImage);

    this.imageFiles?.forEach(image => {   

      if (this.imageFiles![this.selectedImageIdx] !== image) {
        newPost.append('images', image);
      }
    });

    this.postService.add(newPost).subscribe({
      next:(postId) => {
        this.isLoading = true;
        this.router.navigate(['/detail/', postId]);
        this.isLoading = false;
      },
      error:(er) => this.errorMessage = er
    })
  }

  mainImageHandle(url: any) {
    this.selectedElement = url;
    const currentIndex = this.imageUrls?.indexOf(url);
    this.selectedImageIdx = currentIndex!;
    const currentFile = this.imageFiles![currentIndex!];
    this.createForm.get('mainImage')?.setValue(currentFile);
  }
  
  onFileChange(event: any) {
    [...event.target.files!].forEach((file) => {
      this.imageFiles?.push(file);
      var reader = new FileReader();
		  reader.readAsDataURL(file); 
      reader.onload = (_event) => {
      this.imageUrls?.push(reader.result!);
      }
    });
  }

  isSelected(element: any) {
    return element == this.selectedElement;
  }

  get username() {
    return this.createForm.get('title');
  }
  
  get content() {
    return this.createForm.get('content');
  }

  get mainImage() {
    return this.createForm.get('mainImage');
  }

  get images() {
    return this.createForm.get('images');
  }

  get videos() {
    return this.createForm.get('videos');
  }
}