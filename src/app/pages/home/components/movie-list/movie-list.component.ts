import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MovieCardComponent } from "../../../../shared/components/movie-card/movie-card.component";

@Component({
  selector: 'app-home-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  @Input() posts : any[] = [];
}
