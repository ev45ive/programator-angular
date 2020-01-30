import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BlogRoutingModule } from "./blog-routing.module";
import { PostsViewComponent } from "./views/posts-view/posts-view.component";
import { HttpClientModule } from "@angular/common/http";
import { PostViewComponent } from "./views/post-view/post-view.component";
import { PostCommentComponent } from "./components/post-comment/post-comment.component";
import { PostCommentEditorComponent } from "./components/post-comment-editor/post-comment-editor.component";
import { PostsSearchViewComponent } from "./views/posts-search-view/posts-search-view.component";
import { SearchFormComponent } from "./components/search-form/search-form.component";
import { PostsGridComponent } from "./components/posts-grid/posts-grid.component";
import { ReactiveFormsModule } from "@angular/forms";
import { SyncSearchComponent } from "./views/sync-search/sync-search.component";
import { API_URL } from './tokens';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PostsViewComponent,
    PostViewComponent,
    PostCommentComponent,
    PostCommentEditorComponent,
    PostsSearchViewComponent,
    SearchFormComponent,
    PostsGridComponent,
    SyncSearchComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
    {
      provide: API_URL,
      useValue: "http://localhost:3000/"
    }
    // {
    //   provide: SearchPostsService,
    //   useClass: TestingSearchPostsService
    //   // useFactory(){
    //   //   return new SearchPostsService(...)
    //   // }
    // }
    // {
    //   provide:SearchPostsService, useClass:SearchPostsService
    // },
    // SearchPostsService
  ]
})
export class BlogModule {}
