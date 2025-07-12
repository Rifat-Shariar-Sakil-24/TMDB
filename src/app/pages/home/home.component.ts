import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { MovieService } from '../../core/services/movie.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
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
