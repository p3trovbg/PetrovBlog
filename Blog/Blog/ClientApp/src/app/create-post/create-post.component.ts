import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent {
  createForm: FormGroup;
  errorMessage = '';
  constructor(private fb: FormBuilder) {
    this.createForm = fb.group({
      'title': ['', [Validators.required]],
      'content': ['', [Validators.required]],
      'mainImage': [''],
      'images': [''],
      'videos': [''],
    })
  }

}
