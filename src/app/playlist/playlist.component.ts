import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent implements OnInit {
  mode = "show";

  playlist: Playlist = {
    id: 123,
    name: "Placki",
    color: "#ff00ff",
    favorite: false
  };

  edit() {
    this.mode = "edit";
  }
  
  cancel() {
    this.mode = "show";
  }

  constructor() {}

  ngOnInit() {}
}
