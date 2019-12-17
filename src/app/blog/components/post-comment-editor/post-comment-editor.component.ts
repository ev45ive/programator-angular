import { Component, OnInit, EventEmitter, Output } from "@angular/core";
import { Comment } from "../../Post";

@Component({
  selector: "app-post-comment-editor",
  templateUrl: "./post-comment-editor.component.html",
  styleUrls: ["./post-comment-editor.component.scss"]
})
export class PostCommentEditorComponent implements OnInit {
  comment: Comment = {
    id: null,
    body: "",
    email: "",
    name: ""
  };

  @Output()
  addComment = new EventEmitter();

  send() {
    
    this.addComment.emit(this.comment);
    this.comment = {
      id: null,
      body: "",
      email: "",
      name: "",
      postId: null
    };
  }

  bodyInput(text: string) {
    if (text.length <= 170) {
      this.comment.body = text;
    }
  }

  constructor() {}

  ngOnInit() {}
}
