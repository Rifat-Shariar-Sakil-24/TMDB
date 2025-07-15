import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../../../core/services/search/search.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';


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
      debounceTime(300), 
      distinctUntilChanged(),
     ).subscribe((term:string)=>{
      this.searchService.setSearchTerm(term);
     }) 
  }

  
}
