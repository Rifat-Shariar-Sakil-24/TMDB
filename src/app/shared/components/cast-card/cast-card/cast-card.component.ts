import { Component, Input } from '@angular/core';
import { PersonCard } from '../../../../core/models/person.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cast-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.css'
})
export class CastCardComponent {
    @Input() cast!: PersonCard;
}
