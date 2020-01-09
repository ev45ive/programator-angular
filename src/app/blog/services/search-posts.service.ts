import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post, Post } from "../Post";
import { of } from "rxjs";

import dane from "../../../../db-1576606331233.json";
// "resolveJsonModule": true, w tsconfig.json

@Injectable({
  providedIn: "root"
})
export class SearchPostsService {
  constructor(
    @Inject("API_URL") private api_url: string,
    private http: HttpClient
  ) {}

  search(query = "molestiae") {
    // return of(dane.posts);

    return this.http.get<Post[]>(this.api_url + "posts", {
      params: {
        q: query,
        _limit: "10"
      }
    });
  }
}
