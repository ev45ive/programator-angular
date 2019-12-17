import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from '../../Post';

@Component({
  selector: "app-posts-view",
  templateUrl: "./posts-view.component.html",
  styleUrls: ["./posts-view.component.scss"]
})
export class PostsViewComponent implements OnInit {
  posts: Post[] = [];

  url = "http://localhost:3000/posts";

  constructor(public http: HttpClient) {}

  ngOnInit() {
    this.http
      .get<Post[]>(this.url, {
        headers: {},
        params: {
          _limit: "10",
          _expand: "user"
        }
      })
      .subscribe(resp => (this.posts = resp));

    // .toPromise()
    // .then(resp => {
    //   this.posts = resp;
    // });
  }
}
