import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiEndpoints } from '../constants/api.config';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  constructor(private httpClient : HttpClient) { }

  getMovies() : Observable<any>{
    const headers = { Authorization: environment.tmdbToken }
    return this.httpClient.get<any>(ApiEndpoints.movieListBaseURL, {headers});
  }
}
