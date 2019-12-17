import { Component, OnInit } from "@angular/core";
import { Post } from "../../Post";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-post-view",
  templateUrl: "./post-view.component.html",
  styleUrls: ["./post-view.component.scss"]
})
export class PostViewComponent implements OnInit {
  post: Post;
  url = "http://localhost:3000/";

  constructor(public route: ActivatedRoute, public http: HttpClient) {}

  ngOnInit() {
    const post_id = this.route.snapshot.paramMap.get("post_id");
    // ==
    this.http
      .get<Post>(`${this.url}posts/${post_id}`, {
        params: {
          _expand: "user",
          _embed: "comments"
        }
      })
      .subscribe(post => (this.post = post));
  }
}
