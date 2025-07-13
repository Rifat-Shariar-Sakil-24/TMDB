import { Component, Input } from '@angular/core';
import { MovieCard } from '../../../core/models/movie.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.css'
})
export class MovieCardComponent {
  @Input() movie! : MovieCard;
}
