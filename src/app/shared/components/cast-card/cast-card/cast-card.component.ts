import { Component, Input } from '@angular/core';
import { CastCard } from '../../../../core/models/cast.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cast-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cast-card.component.html',
  styleUrl: './cast-card.component.css'
})
export class CastCardComponent {
    @Input() cast!: CastCard;
}
