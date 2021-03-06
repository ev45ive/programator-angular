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

  playlist: Playlist = this.playlists[1]


  select(p:Playlist){
    this.playlist = p
  }

  edit() {
    this.mode = "edit";
  }

  cancel() {
    this.mode = "show";
  }

  constructor(cdr: ChangeDetectorRef) {
    // cdr.detectChanges()

    // setInterval(()=>{
    //   const last = this.playlists.pop()
    //   this.playlists.unshift(last)
    // },1000 )
  }

  ngOnInit() {}
}

// console.log(PlaylistComponent)
