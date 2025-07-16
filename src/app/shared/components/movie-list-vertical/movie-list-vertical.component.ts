import { Component, Input } from '@angular/core';
import { MovieDetails } from './../../../core/models/movie.model';
import { CommonModule } from '@angular/common';
import { MovieCardWideComponent } from '../movie-card-wide/movie-card-wide.component';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-movie-list-vertical',
  standalone: true,
  imports: [CommonModule, MovieCardWideComponent, RouterLink],

  templateUrl: './movie-list-vertical.component.html',
  styleUrl: './movie-list-vertical.component.css',
})
export class MovieListVerticalComponent {
  @Input() movies: MovieDetails[] = [];
}
