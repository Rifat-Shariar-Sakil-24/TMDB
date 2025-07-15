import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../core/services/search/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, map, switchMap } from 'rxjs';


@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.css'
})
export class SearchBoxComponent implements OnInit{

  searchControl : FormControl = new FormControl('');

  constructor(private searchService : SearchService){
  }

  ngOnInit(): void {
    this.searchControl.valueChanges.pipe(
      map((term: string) => term.trim()),
      debounceTime(300), 
      distinctUntilChanged(),
      //filter((term: string) => term.length >= 1)
     ).subscribe((term:string)=>{
      this.searchService.setSearchTerm(term);
     }) 
  }

  
}
