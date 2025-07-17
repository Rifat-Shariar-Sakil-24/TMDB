import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCard } from '../../core/models/movie.model';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MovieFilterService } from '../../core/services/movie-filter/movie-filter.service';
import { Filter } from '../../core/models/filter.model';
import { PaginationBarComponent } from '../../shared/components/pagination-bar/pagination-bar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MovieListComponent,
    NavbarComponent,
    BannerComponent,
    MovieFilterComponent,
    PaginationBarComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  movieFilterObj!: Filter;
  movies: MovieCard[] = [];

  constructor(
    private movieService: MovieService,
    private movieFilterService: MovieFilterService,
  ) {}

  ngOnInit(): void {
    this.movieFilterService.movieFilter$.subscribe((movieFilterObj) => {
      this.movieFilterObj = { ...movieFilterObj, page: this.currentPage };

      this.getMoviesFromPublisher();
    });

    console.log('checking console log production'); // should not be console logged in production
  }

  totalPages = 10;
  currentPage = 1;
  getMoviesFromPublisher() {
    this.movieFilterObj.page = this.currentPage;
    this.movieService.getMovies(this.movieFilterObj).subscribe((response) => {
      this.movies = response.results;

      // this.totalPages = response.total_pages;
    });
  }

}
