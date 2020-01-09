import { Component, OnInit } from "@angular/core";
import { SearchPostsService } from "../../services/search-posts.service";
import { timer, interval } from "rxjs";
import { Post } from "../../Post";

@Component({
  selector: "app-posts-search-view",
  templateUrl: "./posts-search-view.component.html",
  styleUrls: ["./posts-search-view.component.scss"]
})
export class PostsSearchViewComponent implements OnInit {
  posts: Post[];

  constructor(private searchService: SearchPostsService) {}

  search(query: string) {
    this.searchService.search(query)
      // .pipe()
      .subscribe({
        next: posts => {
          console.log(posts);
          this.posts = posts;
        },
        error: err => console.log(err),
        complete: () => console.log("completed")
      });
  }

  ngOnInit() {}
}

/* 
const clock = interval(1000);

clock.subscribe({
  next: resp => {
    console.log('Clock 2 ',resp);
  }
});

const sub = clock.subscribe({
  next: resp => {
    console.log("Clock 1", resp);

    if (resp > 5) {
      sub.unsubscribe();
    }
  }
}); */
