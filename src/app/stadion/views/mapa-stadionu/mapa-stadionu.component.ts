import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-mapa-stadionu",
  templateUrl: "./mapa-stadionu.component.html",
  styleUrls: ["./mapa-stadionu.component.scss"]
})
export class MapaStadionuComponent implements OnInit {
  aaa = [-6, -12, -18, -30, -36, -42, -54, -60, -66];

  bbb = [
    -5.33,
    -12,
    -18.66,
    -29.33,
    -36,
    -42.66,
    -53.33,
    -60,
    -66.66,
    -77.33,
    -84,
    -90.66
  ];

  selected = null;

  select(chair) {
    this.selected = chair;
  }

  constructor() {}

  ngOnInit() {}
}
