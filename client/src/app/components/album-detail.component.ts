import {Component,OnInit} from '@angular/core';
import { Router,ActivatedRoute, Params} from "@angular/router";
import {GLOBAL} from "../services/global";
import {UserService} from "../services/user.service";
import {AlbumService} from "../services/album.service";
import {Album} from "../models/album";

@Component({
    selector: 'album-detail',
    templateUrl: "../views/album-detail.html",
    providers: [UserService,AlbumService]
})

export class AlbumDetailComponent implements OnInit{
    public identity;
    public token;
    public url;
    public album:Album;

    ngOnInit(){
        //Sacar album de la base
        this.getAlbum();
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _userService: UserService,
        public _albumService: AlbumService
    ){
        this.identity=this._userService.getIdentity();
        this.token = this._userService.getToken();
        this.url=GLOBAL.url;
    }

    getAlbum(){
        this._route.params.forEach((params:Params)=>{
            let id = params['id'];
            this._albumService.getAlbum(this.token,id).subscribe(
                response=>{
                    if(!response.album){
                        this._router.navigate(['/']);
                    }else{
                        this.album=response.album;
                    }
                },
                error=>{
                    var errorMessage = <any>error;
                    if(errorMessage!=null){
                        var body = JSON.parse(error._body);
                        //this.alertMessage=body.message;
                        console.log(error);
                    }
                }
            )
        });
    }
}
