import { Component, OnInit, Inject, Input } from "@angular/core";
import { Post } from "../../Post";

@Component({
  selector: "app-posts-grid",
  templateUrl: "./posts-grid.component.html",
  styleUrls: ["./posts-grid.component.scss"]
})
export class PostsGridComponent implements OnInit {
 
  @Input()
  posts: Post[];

  constructor() {}

  ngOnInit() {}
}
