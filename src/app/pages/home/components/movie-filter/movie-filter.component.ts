import { Component, OnInit } from '@angular/core';
import { MovieFilterService } from '../../../../core/services/movie-filter/movie-filter.service';
import { Genre } from '../../../../core/models/movie.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Filter } from '../../../../core/models/filter.model';

@Component({
  selector: 'app-movie-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './movie-filter.component.html',
  styleUrls: ['./movie-filter.component.css'],
})
export class MovieFilterComponent implements OnInit {
  constructor(private movieFilterService: MovieFilterService) { }

  genres!: Genre[];
  allCertifications: any = {};
  certifications: any[] = [];
  selectedCountry: string = '';
  sorts: { label: string; value: string }[] = [
    { label: 'Popularity ↓', value: 'popularity.desc' },
    { label: 'Popularity ↑', value: 'popularity.asc' },
  ];

  movieFilter!: Filter;

  ngOnInit(): void {
    this.clearFilters();

    this.movieFilterService.getMovieGenreList().subscribe((response) => {
      this.genres = response.genres;
    });

    this.movieFilterService
      .getMovieCertificationList()
      .subscribe((response) => {
        this.allCertifications = response.certifications;
        const firstCountry = Object.keys(this.allCertifications)[0];
        if (firstCountry) {
          this.selectedCountry = firstCountry;
          this.certifications = this.allCertifications[firstCountry] || [];
        }

      });


    //this.emitFilterChange();
  }

  onCountryChange() {
    this.certifications = this.allCertifications[this.selectedCountry] || [];
    this.movieFilter.certification = '';
    this.movieFilter.certification_country = this.selectedCountry;
    this.emitFilterChange();
  }

  onCertificationChange() {
    console.log('Selected Country:', this.selectedCountry);
    console.log('Selected Certification:', this.movieFilter.certification);
    this.movieFilter.certification_country = this.selectedCountry;
    this.emitFilterChange();
  }

  clearFilters() {
    this.movieFilter = {
      genreId: 0,
      certification: '',
      sort_by: 'popularity.desc',
      page: 1
    };

    delete this.movieFilter.certification_country;
    this.emitFilterChange();
  }

  emitFilterChange() {
    //console.log("on movie filter"+this.movieFilter.certification_country);
    this.movieFilterService.setFilter(this.movieFilter);

  }


  getCountryName(countryCode: string): string {
    const countryNames: { [key: string]: string } = {
      'US': 'United States',
      'GB': 'United Kingdom',
      'CA': 'Canada',
      'AU': 'Australia',
      'DE': 'Germany',
      'FR': 'France',
      'ES': 'Spain',
      'IT': 'Italy',
      'JP': 'Japan',
      'KR': 'South Korea',
      'IN': 'India',
      'BR': 'Brazil',
      'RU': 'Russia',
      'CN': 'China'
    };
    return countryNames[countryCode] || countryCode;
  }

  getCountryCodes(): string[] {
    return Object.keys(this.allCertifications);
  }
}
