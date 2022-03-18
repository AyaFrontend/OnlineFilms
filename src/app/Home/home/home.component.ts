import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from 'src/app/Models/movie';
import { ServerResponse } from 'src/app/Models/server-response';
import { Tv } from 'src/app/Models/tv';
import { MediaService } from 'src/app/Services/media.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  trendingMovies: Movie[] = [];
  trendingTv: Tv[] = [];

  imgBasePath: string = 'https://image.tmdb.org/t/p/w500/';

  constructor(private _media: MediaService) {

    
   }

  ngOnInit(): void {
     this._media.getTrending<Movie>('movie').subscribe((result)=> {
       this.trendingMovies = result.results.slice(0,10);
     });

     this._media.getTrending<Tv>('tv').subscribe((response)=>
     {
       this.trendingTv = response.results.slice(0,10);
     })
  }

}
