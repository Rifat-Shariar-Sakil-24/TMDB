import { Component, Input } from '@angular/core';
import { PersonCard } from '../../../core/models/person.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-person-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './person-card.component.html',
  styleUrl: './person-card.component.css'
})
export class PersonCardComponent {
  @Input() cast!: PersonCard;
}
