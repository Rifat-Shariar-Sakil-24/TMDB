import { HttpClient } from '@angular/common/http';
import { Injectable, numberAttribute } from '@angular/core';
import { environment } from '../../../environments/environment';
import { map, Observable } from 'rxjs';
import { ApiEndpoints } from '../constants/api.config';
import { MovieDetails } from '../models/movie.model';
import { Filter } from '../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  constructor(private httpClient: HttpClient) {}

  // getMovies(movieFilter: Filter): Observable<any> {
  //   const headers = { Authorization: environment.tmdbToken };
  //   return this.httpClient.get<any>(ApiEndpoints.movieListBaseURL, { headers });
  // }
  
  getMovies(movieFilter: Filter): Observable<any> {
    const headers = { Authorization: environment.tmdbToken };

    let url = ApiEndpoints.movieListBaseURL;

    const params: string[] = [];

    if (movieFilter.genreId && movieFilter.genreId !== 0) {
      params.push(`with_genres=${movieFilter.genreId}`);
    }

    if (movieFilter.sort_by) {
      params.push(`sort_by=${movieFilter.sort_by}`);
    }

    // // Add certification
    // if (movieFilter.certificate) {
    //   params.push(`certification_country=AU`);
    //   params.push(
    //     `certification=${encodeURIComponent(movieFilter.certificate)}`,
    //   );
    // }

    // Join params with &
    if (params.length > 0) {
      url += params.join('&');
    }

    return this.httpClient.get<any>(url, { headers });
  }

  getMovieDetails(movieId: string | number): Observable<MovieDetails> {
    const headers = { Authorization: environment.tmdbToken };
    return this.httpClient.get<any>(ApiEndpoints.movieDetails(movieId), {
      headers,
    });
  }
}
