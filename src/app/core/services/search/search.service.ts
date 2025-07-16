import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, EMPTY } from 'rxjs';
import { ApiEndpoints } from './../../constants/api.config';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchTerm = new BehaviorSubject<string>('');
  searchTerm$ = this.searchTerm.asObservable();

  constructor(private httpClient: HttpClient) {}

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }

  getSuggestions(term: string) {
    if (term.length == 0) return EMPTY;
    const headers = { Authorization: environment.tmdbToken };
    return this.httpClient.get<any>(ApiEndpoints.searchSuggestions(term), {
      headers,
    });
  }

  getSearchResults(term: string, page: number) {
    const headers = { Authorization: environment.tmdbToken };
    return this.httpClient.get<any>(ApiEndpoints.searchResults(term, page), {
      headers,
    });
  }
}
