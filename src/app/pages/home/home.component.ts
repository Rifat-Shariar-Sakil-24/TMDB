import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  posts : any[] = [];

  constructor(private httpClient:HttpClient){

  }

  ngOnInit(): void {
    const headers = { 'Authorization': `Bearer ${environment.tmdbToken}` }
    this.httpClient.get<any>("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc", {headers}).subscribe(
      response => {
        this.posts = response.results;
      }
    )
  }

}
