import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../core/services/movie.service';
import { MovieListComponent } from "./components/movie-list/movie-list.component";
import { MovieCard } from '../../core/models/movie.model';
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { BannerComponent } from "./components/banner/banner.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieListComponent, NavbarComponent, BannerComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  movies : MovieCard[] = [];

  constructor(private movieService:MovieService){

  }

  ngOnInit(): void {
   this.movieService.getMovies().subscribe(
    response => {
      this.movies = response.results;
    }
   );

   console.log("checking console log production"); // should not be console logged in production 

  }


}
