import { Injectable, Inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Post } from "../Post";

@Injectable({
  providedIn: "root"
})
export class SearchPostsService {
  constructor(
    @Inject("API_URL") private api_url: string,
    private http: HttpClient
  ) {}

  search(query = "molestiae") {
    
    return this.http.get<Post[]>(this.api_url + "posts", {
      params: {
        q: query,
        _limit: "10"
      }
    });
  }
}
