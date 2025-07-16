import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonCard } from '../../core/models/person.model';
import { PersonService } from '../../core/services/person/person.service';
import { CommonModule, DatePipe } from '@angular/common';
import { MovieListComponent } from '../home/components/movie-list/movie-list.component';
import { ReadMoreComponent } from '../../shared/components/read-more/read-more.component';
import { NavbarComponent } from '../../shared/components/navbar/navbar.component';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css'],
  imports:[DatePipe, MovieListComponent,ReadMoreComponent,CommonModule,NavbarComponent],
  standalone: true,
})
export class PersonDetailsComponent implements OnInit {
  personId! : number;
  personDetails!: PersonCard;
  loading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

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

  calculateAge(): string {
    if (!this.personDetails?.birthday) return '';

    const birthDate = new Date(this.personDetails.birthday);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    return age.toString();
  }

 

}
