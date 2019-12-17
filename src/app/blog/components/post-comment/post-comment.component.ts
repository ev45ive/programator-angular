import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Comment } from "../../Post";

@Component({
  selector: "app-post-comment",
  templateUrl: "./post-comment.component.html",
  styleUrls: ["./post-comment.component.scss"]
})
export class PostCommentComponent implements OnInit {
  @Input()
  comment: Comment;

  @Output()
  remove = new EventEmitter();

  close() {
    this.remove.emit();
  }

  constructor() {}

  ngOnInit() {}
}
