import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ApiEndpoints } from '../../constants/api.config';
import { BehaviorSubject } from 'rxjs';
import { Filter } from '../../models/filter.model';

@Injectable({
  providedIn: 'root',
})
export class MovieFilterService {
  constructor(private httpClient: HttpClient) {}

  getMovieGenreList() {
    const headers = { Authorization: environment.tmdbToken };
    return this.httpClient.get<any>(ApiEndpoints.genresList, { headers });
  }

  getMovieCertificationList() {
    const headers = { Authorization: environment.tmdbToken };
    return this.httpClient.get<any>(ApiEndpoints.movieCertifications, {
      headers,
    });
  }

  private movieFilter = new BehaviorSubject<Filter>({});
  movieFilter$ = this.movieFilter.asObservable();

  setFilter(filterObj: Filter) {
    console.log(filterObj);
    this.movieFilter.next(filterObj);
  }
}
