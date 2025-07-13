import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MovieCardComponent } from "../../../../shared/components/movie-card/movie-card.component";
import { RouterLink, RouterOutlet } from '@angular/router';
import { MovieCard } from '../../../../core/models/movie.model';

@Component({
  selector: 'app-home-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent, RouterLink],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input() movies! : MovieCard[];
}
