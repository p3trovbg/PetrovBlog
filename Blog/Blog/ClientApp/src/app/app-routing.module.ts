import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: { animation: 'home' }},
  { path: 'posts', component: PostsComponent,  data: { animation: 'posts' } },
  { path: 'about', component: AboutMeComponent, data: { animation: 'about' } },
  { path: 'login', component: LoginComponent, data: { animation: 'login' } },
  { path: 'create', component: CreatePostComponent, data: { animation: 'create' } },
  { path: 'detail/:id', component: PostDetailsComponent, data: { animation: 'detail' } },
  { path: 'edit/:id', component: EditPostComponent, data: { animation: 'edit' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }