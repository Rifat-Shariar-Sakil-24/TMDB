import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { MovieService } from '../../core/services/movie.service';
import { MovieCardComponent } from "../../shared/components/movie-card/movie-card.component";
import { MovieListComponent } from "./components/movie-list/movie-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  posts : any[] = [];

  constructor(private movieService:MovieService){

  }

  ngOnInit(): void {
   this.movieService.getMovies().subscribe(
    response => {
      this.posts = response.results;
    }
   );
  }

}
