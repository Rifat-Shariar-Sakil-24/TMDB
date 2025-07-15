import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieCard } from '../../core/models/movie.model';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SearchResultsComponent } from '../../shared/components/search-results/search-results.component';
import { MovieFilterComponent } from './components/movie-filter/movie-filter.component';
import { MovieFilterService } from '../../core/services/movie-filter/movie-filter.service';
import { Filter } from '../../core/models/filter.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MovieListComponent,
    NavbarComponent,
    BannerComponent,
    SearchResultsComponent,
    MovieFilterComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {

  movieFilterObj!: Filter;
  movies: MovieCard[] = [];
  totalPages = 1;

  constructor(
    private movieService: MovieService,
    private movieFilterService: MovieFilterService,
  ) {}

  ngOnInit(): void {
    this.movieFilterService.movieFilter$.subscribe( movieFilterObj => {
      this.movieFilterObj = movieFilterObj;
      this.getMoviesFromPublisher();
    })

    console.log('checking console log production'); // should not be console logged in production
  }

  getMoviesFromPublisher(){
     this.movieService.getMovies(this.movieFilterObj).subscribe((response) => {
      console.log("heeeeeeeeeeeee");
      this.movies = response.results;
      this.totalPages = response.total_pages;
    });
  }
}
