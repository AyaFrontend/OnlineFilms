import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../Models/movie';
import { ServerResponse } from '../Models/server-response';


@Injectable({
  providedIn: 'root'
})
export class MediaService {

  constructor(private _httpClient: HttpClient) { }

  getTrending<T>(query: string): Observable<ServerResponse<T>>
  {
     return this._httpClient.get(`https://api.themoviedb.org/3/trending/${query}/week?api_key=7c83d8006f939cfe2a092cf634726dcd`) as Observable< ServerResponse<T>> ;
  }

  getDetails(id: string , query: string): Observable<any>
  {
    return this._httpClient.get(`https://api.themoviedb.org/3/${query}/${id}?api_key=7c83d8006f939cfe2a092cf634726dcd`);
  }
}
