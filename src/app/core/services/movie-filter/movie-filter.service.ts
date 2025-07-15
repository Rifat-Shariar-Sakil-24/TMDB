import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiEndpoints } from '../../constants/api.config';

@Injectable({
  providedIn: 'root'
})
export class MovieFilterService {

  constructor(private httpClient: HttpClient) { }

  getMovieGenreList(){
     const headers = { Authorization: environment.tmdbToken }
     return this.httpClient.get<any>(ApiEndpoints.genresList, {headers});
     
  }

  getMovieCertificationList(){
    const headers = { Authorization: environment.tmdbToken }
    return this.httpClient.get<any>(ApiEndpoints.movieCertifications, {headers});
  }
}
