import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { map, Observable } from 'rxjs';
import { ApiEndpoints } from '../constants/api.config';
import { MovieDetails } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpClient : HttpClient) { }

  getMovies() : Observable<any>{
    const headers = { Authorization: environment.tmdbToken }
    return this.httpClient.get<any>(ApiEndpoints.movieListBaseURL, {headers});
  }

  getMovieDetails(movieId : string | number) : Observable<MovieDetails>{
    const headers = { Authorization: environment.tmdbToken }
    return this.httpClient
    .get<any>(ApiEndpoints.movieDetails(movieId), {headers})
    .pipe(
      map(raw => this.extractMovieDetails(raw))  
    );
  }

  extractMovieDetails(raw: any): MovieDetails {
    console.log(raw);
    return {
        id: raw.id,
        title: raw.title,
        overview: raw.overview,
        poster_path: raw.poster_path,
        release_date: raw.release_date,
        genres: raw.genres
    };
  }

}
