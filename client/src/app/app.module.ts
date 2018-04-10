import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing,appRoutingProviders} from "./app.routing";
import { AppComponent } from './app.component';
//User
import {UserEditComponent} from "./components/user-edit.component";

//Artist
import {ArtistListComponent} from "./components/artist-list.component";
import {ArtistAddComponent} from "./components/artist-add.component";
import {ArtistEditComponent} from "./components/artist-edit.component";
import {ArtistDetailComponent} from "./components/artist-detail.component";

//álbum
import {AlbumAddComponent} from "./components/album-add.component";
import {AlbumEditComponent} from "./components/album-edit.component";
import {AlbumDetailComponent} from "./components/album-detail.component";

//Song
import {SongAddComponent} from "./components/song-add.component";
import {SongEditComponent} from "./components/song-edit.component";
import {PlayerComponent} from "./components/player.component";

//Home
import {HomeComponent} from "./components/home.component";

@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    ArtistListComponent,
    HomeComponent,
    ArtistAddComponent,
    ArtistEditComponent,
    ArtistDetailComponent,
    AlbumAddComponent,
    AlbumEditComponent,
    AlbumDetailComponent,
    SongAddComponent,
    SongEditComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
