import { Component, OnInit, ChangeDetectorRef } from "@angular/core";

@Component({
  selector: "app-playlist, .placki-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})

export class PlaylistComponent {
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

  constructor(cdr:ChangeDetectorRef) {
    // cdr.detectChanges()
  }

  ngOnInit() {}
}

// console.log(PlaylistComponent)
