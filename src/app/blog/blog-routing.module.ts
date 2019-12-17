import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PostsViewComponent } from "./views/posts-view/posts-view.component";
import { PostViewComponent } from "./views/post-view/post-view.component";

const routes: Routes = [
  {
    path: "blog",
    component: PostsViewComponent
  },
  {
    path: "post/:post_id",
    component: PostViewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule {}
