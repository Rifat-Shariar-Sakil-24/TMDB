import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search/search.service';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css',
})
export class SearchResultsComponent implements OnInit {
  searchTriggered = false;

  constructor(
    private searchService: SearchService,
    private eRef: ElementRef,
    private router : Router
  ) {}

  suggestions: any[] = [];
  ngOnInit(): void {
    this.startSearch();
  }

  startSearch() {
    this.searchService.searchTerm$.subscribe((searchTerm) => {
      console.log(searchTerm.length);
      if (searchTerm.length == 0) {
        this.searchTriggered = false;
      }

      //when search length is zero this won't execute
      this.searchService.getSuggestions(searchTerm).subscribe((response) => {
        this.suggestions = response.results;
        this.searchTriggered = true;
      });
    });
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.suggestions = [];
      this.searchTriggered = false;
    }
  }

  searchedTerm!: string;
  clickedOnSearchTerm(term: string): void {
    this.router.navigate(['/search/movie'], { queryParams: { query: term } });
  }
}
