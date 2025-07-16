import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { CommonModule } from '@angular/common';
import { Genre, MovieDetails } from '../../core/models/movie.model';
import { CastListComponent } from "./components/cast-list/cast-list.component";
import { CastCardComponent } from "../../shared/components/cast-card/cast-card/cast-card.component";
import { NavbarComponent } from "../../shared/components/navbar/navbar.component";
import { PersonListComponent } from "./components/person-list/person-list.component";


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, CastListComponent, CastCardComponent, NavbarComponent, PersonListComponent],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  genres? : Genre[];

  movieId! : number;

  movie! : MovieDetails;

  constructor(private route:ActivatedRoute,
              private movieService:MovieService

  ){}

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.movieId = Number(params.get('id'));
        this.movieService.getMovieDetails(this.movieId).subscribe(response=>{
          this.genres = response.genres;
          this.movie = response; 
          this.movie.cast = response.credits.cast;
          console.log(this.movie);
        })
    
      }
    )
  }


}
