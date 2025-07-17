import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  searchQuery: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log("hell");
  }

  onSearch(event: Event) {
    event.preventDefault();
    console.log("Search triggered with:", this.searchQuery);
    if (this.searchQuery.trim()) {
      const term = this.searchQuery.trim();
      this.router.navigate(['/search/movie'], { queryParams: { query: term } });
    }
  }
}


