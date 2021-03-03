import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Console } from 'console';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent  {

  artista: any = {};
  topTracks: any = {};
  loadingArtist: boolean;
  constructor(private Router: ActivatedRoute,
              private spotify: SpotifyService) { 
    this.loadingArtist = true;
    this.Router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);

    });
  }

  getArtista(id: string) {
    this.loadingArtist = true;
    this.spotify.getArtista(id)
      .subscribe(artista => {
        console.log(artista);
        this.artista = artista;
        this.loadingArtist = false;
      });
    
  }
  getTopTracks(id: string) {
    this.spotify.getTopTracks(id)
      .subscribe(topTracks => {
        console.log(topTracks);
        this.topTracks = topTracks;
      }); 

  }
}