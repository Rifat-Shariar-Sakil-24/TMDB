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
  currentPage = 1;

  constructor(
    private movieService: MovieService,
    private movieFilterService: MovieFilterService,
  ) {}

  ngOnInit(): void {
    this.movieFilterService.movieFilter$.subscribe( movieFilterObj => {
      this.movieFilterObj = { ...movieFilterObj, page: this.currentPage };
      
      this.getMoviesFromPublisher();
    })

    console.log('checking console log production'); // should not be console logged in production
  }

  getMoviesFromPublisher(){
     this.movieService.getMovies(this.movieFilterObj).subscribe((response) => {
     // console.log("heeeeeeeeeeeee");
     // console.log(response.results);
     // console.log(this.movieFilterObj);
      this.movies = response.results;
      this.totalPages = response.total_pages;
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.movieFilterObj.page = page;
      this.getMoviesFromPublisher();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  getPages(): number[] {
  const totalPages = 10;
  return Array.from({ length: totalPages }, (_, i) => i + 1);
}
}
