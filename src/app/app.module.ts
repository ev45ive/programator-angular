import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { StadionModule } from './stadion/stadion.module';
import { BlogModule } from './blog/blog.module';

import { AngularFireModule } from '@angular/fire'
// import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { FirechatModule } from './firechat/firechat.module';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    // AngularFireAnalyticsModule,
    AngularFirestoreModule,
    // StadionModule,
    BlogModule,
    FirechatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
