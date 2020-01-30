import { Injectable, Inject, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../Post";
import {
  of,
  merge,
  concat,
  Subject,
  ReplaySubject,
  BehaviorSubject
} from "rxjs";
import { startWith } from "rxjs/operators";
import { API_URL } from "../tokens";

// import dane from "../../../../db-1576606331233.json";
// "resolveJsonModule": true, w tsconfig.json

@Injectable({
  providedIn: "root"
})
export class SearchPostsService {
  // getResults() {
  //   // return merge(this.resultsChange, of(this.resultsCache));
  //   // return concat(this.resultsChange, of(this.resultsCache));
  //   // return concat(of(this.resultsCache), this.resultsChange);
  //   return this.resultsChange.pipe(startWith(this.resultsCache));
  // }

  // resultsCache: Post[] = [];
  // resultsChange = new EventEmitter<Post[]>();
  // resultsChange = new Subject<Post[]>();
  // resultsChange = new ReplaySubject<Post[]>(3, 5000);
  // resultsChange = new ReplaySubject<Post[]>(1);
  resultsChange = new BehaviorSubject<Post[]>([]);

  constructor(
    @Inject(API_URL) private api_url: string,
    private http: HttpClient
  ) {
    // (window as any).subject = this.resultsChange;

    console.log("SearchPostsService");
  }

  search(query = "molestiae") {
    // this.resultsChange.getValue()
    this.http
      .get<Post[]>(this.api_url + "posts", {
        params: {
          q: query,
          _limit: "10"
        }
      })
      .subscribe(posts => {
        // this.resultsCache = posts;

        console.log("result from server");
        this.resultsChange.next(posts);
      });
  }
}
