import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/common/login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  private router: Router;
  isExpanded = false;
  loginService: LoginService;

  constructor(loginService: LoginService, router: Router) {
      this.loginService = loginService;
      this.router = router;
      this.loginService
  }

  get isLogin() {
    return this.loginService.isLogged;
  }
  
  logout() {
    this.loginService.logout();
    this.router.navigateByUrl('/');
  }

  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }
}
