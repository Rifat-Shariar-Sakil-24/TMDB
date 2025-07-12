import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

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
    this.httpClient.get<any[]>("https://jsonplaceholder.typicode.com/posts").subscribe(
      response => {
        this.posts = response;
      }
    )
  }

}
