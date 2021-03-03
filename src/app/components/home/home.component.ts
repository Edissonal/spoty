import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensajeError;
  constructor(private spotify: SpotifyService) { 
    this.loading = true;
    this.error = false;

    this.spotify.getNewRelease()
      .subscribe((data:any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }, (errorServicio) => {
          
          this.error = true;
          this.loading = false;
          this.mensajeError= errorServicio.error.error.message;

       });
  }



}
