import { Component, Input } from '@angular/core';
import { PersonCard } from '../../../../core/models/person.model';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from "../../../../shared/components/person-card/person-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule, PersonCardComponent,RouterLink],
  templateUrl: './person-list.component.html',
  styleUrl: './person-list.component.css'
})
export class PersonListComponent {
  @Input() castList : PersonCard[] = [];
}
