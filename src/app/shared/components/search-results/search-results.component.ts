import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search/search.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit{

  constructor(
    private searchService : SearchService,
    private eRef : ElementRef
  ){}

  suggestions : any[] = [];
  ngOnInit(): void {
      this.searchService.searchTerm$.subscribe(searchTerm => {
      console.log(searchTerm);
      this.searchService.getSuggestions(searchTerm).subscribe(response => {
       // console.log(response.name);
       console.log(response);
       this.suggestions = response.results;
       console.log(this.suggestions.length)
      })

    })
  }


  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.suggestions = []; 
    }
  }

  
}
