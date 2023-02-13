import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/common/login.service';

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
  }

  isLogin() {
    return this.loginService.isLogin;
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
