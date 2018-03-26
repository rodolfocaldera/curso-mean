import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing,appRoutingProviders} from "./app.routing";
import { AppComponent } from './app.component';
import {UserEditComponent} from "./components/user-edit.component";
import {ArtistListComponent} from "./components/artist-list.component";
import {ArtistAddComponent} from "./components/artist-add.component";
import {HomeComponent} from "./components/home.component";

@NgModule({
  declarations: [
    AppComponent,
    UserEditComponent,
    ArtistListComponent,
    HomeComponent,
    ArtistAddComponent
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
