import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

//importar user
import {UserEditComponent} from "./components/user-edit.component";

//importar artist
import {ArtistListComponent} from "./components/artist-list.component";
import {ArtistAddComponent} from "./components/artist-add.component";
import {ArtistEditComponent} from "./components/artist-edit.component";
import {ArtistDetailComponent} from "./components/artist-detail.component";

//importar álbums
import {AlbumAddComponent} from "./components/album-add.component";
import {AlbumEditComponent} from "./components/album-edit.component";
import {AlbumDetailComponent} from "./components/album-detail.component";


//Importar songs
import {SongAddComponent} from "./components/song-add.component";
import {SongEditComponent} from "./components/song-edit.component";

//importar Home
import {HomeComponent} from "./components/home.component";
const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'artistas/:page',component:ArtistListComponent},
    {path:'crear-artista',component:ArtistAddComponent},
    {path:'artista/:id',component:ArtistDetailComponent},
    {path:'editar-artista/:id',component:ArtistEditComponent},
    {path:'crear-album/:artist',component:AlbumAddComponent},
    {path:'editar-album/:id',component:AlbumEditComponent},
    {path:'album/:id',component:AlbumDetailComponent},
    {path:'crear-tema/:album',component:SongAddComponent},
    {path:'editar-tema/:id',component:SongEditComponent},
    {path:'mis-datos',component:UserEditComponent},
    {path:'**',component:HomeComponent},
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);