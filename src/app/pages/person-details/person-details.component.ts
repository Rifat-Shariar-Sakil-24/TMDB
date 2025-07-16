import { Component, OnInit } from '@angular/core';
import { PersonService } from '../../core/services/person/person.service';
import { ActivatedRoute } from '@angular/router';
import { PersonCard } from '../../core/models/person.model';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../home/components/movie-list/movie-list.component';
import { ReadMoreComponent } from '../../shared/components/read-more/read-more.component';

@Component({
  selector: 'app-person-details',
  standalone: true,
  imports: [CommonModule, MovieListComponent, ReadMoreComponent],
  templateUrl: './person-details.component.html',
  styleUrl: './person-details.component.css'
})
export class PersonDetailsComponent implements OnInit {

  private personId! : number;

  personDetails! : PersonCard;


  constructor(private route: ActivatedRoute,
    private personService: PersonService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      params => {
        this.personId = Number(params.get('id'));
        this.personService.getPersonDetails(this.personId).subscribe(response => {
          this.personDetails = response;
          this.personDetails.cast = response.credits.cast;
        })

      }
    )
  }



}
