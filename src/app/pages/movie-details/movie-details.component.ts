import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../core/services/movie.service';
import { CommonModule } from '@angular/common';
import { MovieDetails } from '../../core/models/movie.model';


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  genres : any[] = [];

  movieId! : number;

  movieData! : MovieDetails;

  constructor(private route:ActivatedRoute,
              private movieService:MovieService

  ){}

  
  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.movieId = Number(params.get('id'));
        this.movieService.getMovieDetails(this.movieId).subscribe(response=>{
          this.genres = response.genres;
          this.movieData = response; 
          console.log(this.movieData);
        })
    
      }
    )
  }


}
