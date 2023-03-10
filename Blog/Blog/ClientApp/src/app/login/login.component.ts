import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/common/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private loginService: LoginService) {
    this.loginForm = this.fb.group({
      'email': ['', [Validators.required]],
      'password': ['', [Validators.required]]
    })
   }

  ngOnInit(): void {
  }

  login() {    
    this.loginService.login(this.loginForm.value).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: (response) => this.errorMessage = response.error,
    });
    }
  

  get username() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}