import { Component, OnInit } from "@angular/core";
import { SearchPostsService } from "../../services/search-posts.service";
import { timer, interval, Subscription, Subject } from "rxjs";
import { Post } from "../../Post";
import { takeUntil, tap, map } from "rxjs/operators";

@Component({
  selector: "app-posts-search-view",
  templateUrl: "./posts-search-view.component.html",
  styleUrls: ["./posts-search-view.component.scss"]
})
export class PostsSearchViewComponent implements OnInit {
  posts: Post[] = [];

  posts$ = this.searchService.resultsChange.pipe(
    tap(console.log),
    map(posts => (this.posts = posts))
  );

  constructor(private searchService: SearchPostsService) {}

  search(query: string) {
    this.searchService.search(query);
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
