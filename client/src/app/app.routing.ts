import {ModuleWithProviders} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

//importar user
import {UserEditComponent} from "./components/user-edit.component";

//importar artist
import {ArtistListComponent} from "./components/artist-list.component";
import {ArtistAddComponent} from "./components/artist-add.component";

//importar Home
import {HomeComponent} from "./components/home.component";
const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'artistas/:page',component:ArtistListComponent},
    {path:'crear-artista',component:ArtistAddComponent},
    {path:'mis-datos',component:UserEditComponent},
    {path:'**',component:HomeComponent},
];

export const appRoutingProviders: any[]=[];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);