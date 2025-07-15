import { Component, OnInit } from '@angular/core';
import { MovieFilterService } from '../../../../core/services/movie-filter/movie-filter.service';
import { Genre } from '../../../../core/models/movie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit{

  constructor(private movieFilterService: MovieFilterService){}

  genres!: Genre[];
  certifications!: any[];
  sorts: { label: string; value: string }[] = [
             { label: 'Popularity ↓', value: 'popularity.desc' },
             { label: 'Popularity ↑', value: 'popularity.asc' }
          ];

  ngOnInit(): void {



    this.movieFilterService.getMovieGenreList().subscribe(response => {
      this.genres = response.genres;
     // console.log(this.genres)
    });

    this.movieFilterService.getMovieCertificationList().subscribe(response => {
    this.certifications = response.certifications?.["BR"] ?? [];


      console.log(response.certifications["BR"])
    })

  }





selectedGenre: number = 0;
selectedCertificate: string = '';
selectedSort: string = 'popularity.desc';


clearFilters() {
  this.selectedGenre = 0;
  this.selectedCertificate = '';
  this.selectedSort = 'popularity.desc';
  this.emitFilterChange();
}

emitFilterChange() {
  console.log('Filters:', {
    genreId: this.selectedGenre,
    certification: this.selectedCertificate,
    sort: this.selectedSort
  });
  
}





}
