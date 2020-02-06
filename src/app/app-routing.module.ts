import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PlaylistComponent } from "./playlist/playlist.component";
import { MapaStadionuComponent } from "./stadion/views/mapa-stadionu/mapa-stadionu.component";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "chat"
  },
  {
    path: "playlists",
    component: PlaylistComponent
  },
    // {
    //   path: "stadion",
    //   component: MapaStadionuComponent
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
