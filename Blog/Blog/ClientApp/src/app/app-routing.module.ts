import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'posts', component: PostsComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'detail/:id', component: PostDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }