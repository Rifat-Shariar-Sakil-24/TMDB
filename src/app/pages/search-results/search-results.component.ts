import { Component } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from '../../core/models/movie.model';
import { SearchService } from '../../core/services/search/search.service';
import { MovieListVerticalComponent } from '../../shared/components/movie-list-vertical/movie-list-vertical.component';
import { CommonModule } from '@angular/common';
import { PaginationBarComponent } from '../../shared/components/pagination-bar/pagination-bar.component';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [MovieListVerticalComponent, CommonModule, PaginationBarComponent],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent {
  movies!: MovieDetails[];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService,
  ) {}

  query!: string;
  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      this.query = params['query'];
      this.getResults();
    });
  }

  totalPages = 10;
  currentPage = 1;
  getResults() {
    this.searchService.getSearchResults(this.query,this.currentPage).subscribe((response) => {
      this.movies = response.results;
      console.log('rec' + this.movies.length);
    });
  }
}
