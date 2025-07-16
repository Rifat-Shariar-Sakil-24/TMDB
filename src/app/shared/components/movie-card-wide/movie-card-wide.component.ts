import { Component, Input } from '@angular/core';
import { MovieDetails } from '../../../core/models/movie.model';
import { WordLimitPipe } from '../../pipes/word-limit.pipe';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card-wide',
  standalone: true,
  imports: [WordLimitPipe,CommonModule],
  templateUrl: './movie-card-wide.component.html',
  styleUrl: './movie-card-wide.component.css'
})
export class MovieCardWideComponent {
  @Input() movie! : MovieDetails;
}
