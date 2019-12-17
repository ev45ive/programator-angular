import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { PostsViewComponent } from './views/posts-view/posts-view.component';
import { HttpClientModule } from '@angular/common/http';
import { PostViewComponent } from './views/post-view/post-view.component';


@NgModule({
  declarations: [
    PostsViewComponent,
    PostViewComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule
  ]
})
export class BlogModule { }
