import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../core/services/search/search.service';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit{

  constructor(private searchService : SearchService){}

  ngOnInit(): void {
      this.searchService.searchTerm$.subscribe(searchTerm => {
      console.log(searchTerm);
      this.searchService.getSuggestions(searchTerm).subscribe(response => {
       // console.log(response.name);
       console.log(response);
      })

    })
  }

  
}
