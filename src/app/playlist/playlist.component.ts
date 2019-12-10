import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { NgForOf, NgForOfContext } from '@angular/common';

NgForOf
NgForOfContext

@Component({
  selector: "app-playlist, .placki-playlist",
  templateUrl: "./playlist.component.html",
  styleUrls: ["./playlist.component.scss"]
})
export class PlaylistComponent {
  mode = "show";

  playlists: Playlist[] = [
    {
      id: 123,
      name: "Placki 123",
      color: "#ffff00",
      favorite: false
    },
    {
      id: 234,
      name: "Placki 234",
      color: "#ff00ff",
      favorite: true
    },
    {
      id: 345,
      name: "Placki 345",
      color: "#ff00ff",
      favorite: false
    },
  ];

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

  constructor(cdr: ChangeDetectorRef) {
    // cdr.detectChanges()
  }

  ngOnInit() {}
}

// console.log(PlaylistComponent)
